import{r as l,_ as h,j as a,a as e,B as u,G as f}from"./index-6dbe909d.js";import{F as p,S as g}from"./FadeInMount-fae40b9c.js";const x="/Portfolio/assets/attach-b3560bed.svg",v=l.lazy(()=>h(()=>import("./Img-9a89ecf6.js"),["assets/Img-9a89ecf6.js","assets/index-6dbe909d.js","assets/index-b78cca29.css"])),b=({title:t,description:s,imagePath:n,altImage:c,linkCode:o,linkLivePreview:i,techStack:d})=>a("li",{className:"basis-2/5 rounded-2xl bg-neutral-600 shadow-2xl flex flex-col justify-between hover:scale-105 transition-all",children:[e("div",{className:"h-[15rem] overflow-hidden",children:e("a",{href:i,className:"flex items-center justify-center",children:e(l.Suspense,{fallback:e("div",{children:"Loading..."}),children:e(v,{src:n,alt:c,style:"rounded-t-2xl h-100"})})})}),e("h3",{className:"text-bold text-xl pt-4",children:t}),e("p",{className:"text-sm text-justify p-4",children:s}),e("div",{className:"py-2 text-sm flex justify-center gap-2",children:d.map(m=>e(u,{size:"medium",children:m}))}),a("ul",{className:"flex flex-row [&>li]:basis-1/2 [&>li>a]:underline p-4 text-sm gap-6 ",children:[e("li",{className:"flex items-center justify-center",children:a("a",{href:o,className:"flex items-center justify-center underline",children:[e("img",{src:f,className:"w-5 h-5 mr-2",alt:"GitHub icon"}),"View Code"]})}),e("li",{className:"flex items-center justify-center",children:a("a",{href:i,className:"flex items-center justify-center underline",children:[e("img",{src:x,className:"w-6 h-6 mr-2",alt:"Chain icon"}),"Live Preview"]})})]})]}),r="/Portfolio/assets/RestaurantSite-c603f672.png",w="/Portfolio/assets/WeatherObserver-7e0fdd1d.png",k=[{title:"Restaurant",description:"This is a website with an offer of a sample restaurant, a project made based on a design. The main technologies used are HTML and Sass.",imagePath:r,altImage:"Restaurant preview",linkCode:"https://github.com/SebLask12/RestaurantSite",linkLivePreview:"https://seblask12.github.io/RestaurantSite/",techStack:["HTML","Sass","Javascript"]},{title:"Weather Observer",description:"This is a website made with React technology for observing temperature and humidity on a chart in a desired city.",imagePath:w,altImage:"Weather Observer Preview",linkCode:"https://github.com/SebLask12/aplikaja-pogodowa",linkLivePreview:"https://warm-dodol-729200.netlify.app/",techStack:["HTML","CSS","React","useContext"]},{title:"Restaurant",description:"This is a website with an offer of a sample restaurant, a project made based on a design. The main technologies used are HTML and Sass.",imagePath:r,altImage:"Restaurant preview",linkCode:"#",linkLivePreview:"#",techStack:["HTML","Sass"]}],y=()=>e(p,{children:a("section",{className:"text-center p-6",children:[e(g,{title:"Portfolio"}),e("br",{}),"Each project is a unique piece of development 🧩",e("ul",{className:"flex flex-col md:flex-row md:flex-wrap text-center justify-around gap-12 md:gap-6 mt-6",children:k.map((t,s)=>e(b,{title:t.title,description:t.description,imagePath:t.imagePath,altImage:t.altImage,linkCode:t.linkCode,linkLivePreview:t.linkLivePreview,techStack:t.techStack},s))})]})});export{y as default};
