'use strict';

// prettier-ignore
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const deleteAll = document.querySelector('.deleteAll__button');
const buttonsContainer = document.querySelector('.buttons_container--hidden');
const arrowUp = document.querySelector('.arrow__up');
const arrowDown = document.querySelector('.arrow__down');
const sortButton = document.querySelector('.sort__button');

class workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        //this.date...
        
        this.coords = coords; // [lat,long]
        this.distance = distance; //in km
        this.duration = duration; //in min
    }

    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
      }
}


class running extends workout {
    type = 'running';
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class cycling extends workout {
    type = 'cycling';
    constructor(coords, distance, duration,elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        //km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39, -12],5.2,24,178);
// const cycling1 = new Cycling([39, -11], 5.3, 95, 555);
// console.log(run1,cycling1);

class App {
    #map;
    #mapEvent;
    #workouts=[];
  #mapZoomLevel = 12;
  #markers = [];
  #index = [];
  #oldCoords;
  #sortFlag;

    constructor() {
        this._getPosition();

        this._getLocalStorage();
        deleteAll.addEventListener('click' , this._deleteAllWorkouts.bind(this));
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationField);
      containerWorkouts.addEventListener('click', (event) => {
        if (event.target.classList.contains('workout__buttons--edit')) this._editWorkout(event);
        else if (event.target.classList.contains('workout__buttons--delete')) this._deleteWorkout(event);
        else this._moveToPopup(event);
          
      });
      sortButton.addEventListener('click', this._sortDistance.bind(this));
        // containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
        // containerWorkouts.addEventListener('click', this._editWorkout.bind(this));
        
        
    }

    _getPosition() {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function ()
            {
                alert('Could not get your position');
            }
            )
    }

    _loadMap(position) {
            // const latiture = position.coords.latitude;
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            console.log(`https://www.google.pl/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];
            console.log(this);
            this.#map = L.map('map').setView(coords, 15);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            //handlifng click on map
            this.#map.on('click',this._showForm.bind(this))

            this.#workouts.forEach(work => {
              this._renderWorkoutMarker(work);
            });
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
    }

    _hideForm() {
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid',1000)
    }

    
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
        e.preventDefault();
        // console.log(this);

        //Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
      const duration = +inputDuration.value;
      let lat, lng;
        if (!this.#mapEvent.latlng) {
          lat = this.#oldCoords[0];
          lng = this.#oldCoords[1];
        }
        else { 
          lat = this.#mapEvent.latlng.lat;
          lng = this.#mapEvent.latlng.lng;
        }
        //If workout running, create runnign object
        let workout;
        if (type === 'running') {
            const cadence = +inputCadence.value;
            console.log(distance,duration,cadence);
             // Check if data is valid
            if (
                !validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)
            )
            return alert('Inputs have to be positive numbers!');

            workout = new running([lat, lng], distance, duration, cadence);
        }
        //If workout cycling, create cycling object
        if (type === 'cycling') {
            const elevation = +inputElevation.value;
      
            if (
              !validInputs(distance, duration, elevation) || !allPositive(distance, duration)
            )
              return alert('Inputs have to be positive numbers!');
      
            workout = new cycling([lat, lng], distance, duration, elevation);
        }
        console.log(workout);
        //Add new object to worktout array
        this.#workouts.push(workout);

        //render workout on map as marker
        this._renderWorkoutMarker(workout);
        
        //render workout on list
        this._renderWorkout(workout);

        //hide form + clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        this._hideForm();

       // Set local storage to all workouts
        this._setLocalStorage();

    }

    _editWorkout(e) {
      this._showForm(e);
      const editItem = e.target;
      const workoutEl = e.target.closest('.workout');
      const workout = this.#workouts.indexOf(this.#workouts.find(work => work.id === workoutEl.dataset.id));
      const oldWorkout = this.#workouts[workout];
      console.log(this.#workouts[workout]);
      inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
      inputType.value = oldWorkout.type;
      inputDistance.value = oldWorkout.distance;
      inputDuration.value = oldWorkout.duration;
      // this.#mapEvent.latlng = oldWorkout.latlng;
      console.log(oldWorkout.coords[0]);
      // this.#mapEvent.latlng.lat = oldWorkout.coords[0];
      // this.#mapEvent.latlng.lng = oldWorkout.coords[1];
      this.#oldCoords = oldWorkout.coords;
      // inputCadence.value === oldWorkout.cadence ? this._toggleElevationField : console.log('ss');;
      // inputType.value === 'running' ? inputCadence.value = oldWorkout.cadence : inputElevation.value = oldWorkout.elevation;

      if (inputType.value === 'running') {
        inputElevation.closest('.form__row').classList.add('form__row--hidden');
        inputCadence.closest('.form__row').classList.remove('form__row--hidden');
        inputCadence.value = oldWorkout.cadence;
      }
      else if (inputType.value === 'cycling') {
        inputElevation.closest('.form__row').classList.remove('form__row--hidden');
        inputCadence.closest('.form__row').classList.add('form__row--hidden');
        inputElevation.value = oldWorkout.elevationGain;
      }
      this._deleteWorkout(e);

      }
    
  _deleteWorkout(e) {
      const deletedItem = e.target;
      const workoutEl = deletedItem.closest('.workout');
      const workout = this.#workouts.indexOf(this.#workouts.find(work => work.id === workoutEl.dataset.id));
      console.log(this.#markers);
      console.log(this.#workouts);
      this.#markers[workout].remove();
      this.#markers.splice(workout, 1);
      this.#workouts.splice(workout, 1);     
      workoutEl.remove();
      this._setLocalStorage();
    }

    _deleteAllWorkouts() {
      console.log('delete');
      this.reset();
    };

    _setLocalStorage() {
      localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    _getLocalStorage() {
      const data = JSON.parse(localStorage.getItem('workouts'));
  
      if (!data) return;
  
      this.#workouts = data;
  
      this.#workouts.forEach(work => {
        this._renderWorkout(work);
        // this._renderWorkoutMarker(work);
      });
    }

    _sortDistance() {
      arrowUp.classList.toggle('arrow--hidden');
      arrowDown.classList.toggle('arrow--hidden');

      let store = [];
      let sorted;
      const workoutsSidebar = document.querySelectorAll(".workout");
      this.#workouts.forEach(work => {
        // pobierz work, zrob tablice
        store.unshift({work: work, distance: work.distance});
        
        // this._renderWorkout(work);
      });
      if(this.#sortFlag) sorted = store.sort((a, b) => a.distance - b.distance);
      else if (!this.#sortFlag) sorted = store.sort((a, b) => b.distance - a.distance);
      sorted.forEach(work => this._renderWorkout(work.work));
      workoutsSidebar.forEach(work => work.remove());
      this.#sortFlag = !this.#sortFlag;
      

    }
    
  _renderWorkoutMarker(workout) {
    const idWorkout = this.#workouts.indexOf(workout);
    const newMarker = L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })).setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
    
      this.#markers.splice(idWorkout, 0 ,newMarker); //powiązanie marker & workout


      
      
    }

    _renderWorkout(workout) {
      
      console.log(this.#workouts.length);
      let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <div class="workout__header"><h2 class="workout__title">${workout.description}</h2><div class="workout__buttons"><label class="workout__buttons--edit">📝</label><label class="workout__buttons--delete">❎</label></div></div>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e) {
        
        const workoutEl = e.target.closest('.workout');
        console.log(workoutEl);
      if (!workoutEl) return;
      if (e.target.closest('.workout__buttons')) return;
        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1,
            }
        });

        //usign public interface
        
        workout.click;
        
    }

    reset() {
      localStorage.removeItem('workouts');
      location.reload();
    }
    

}

const app = new App();




