import{r as c,a as o,j as s,B as m}from"./index-130a3a64.js";import{F as p}from"./FadeInMount-d782cd2e.js";import{S as u}from"./SectionTitle-23599914.js";const j=()=>{const[i,r]=c.useState([]),d=async()=>{try{return await(await fetch("https://portfolio-d3c60-default-rtdb.europe-west1.firebasedatabase.app/post.json",{method:"GET",headers:{"Content-Type":"application/json"}})).json()}catch{return null}},l=async e=>{const t=await e,n=[];for(const a in t)n.push({id:a,name:t[a].name,email:t[a].email,message:t[a].message,time:t[a].time});r(n)};return o(p,{children:s("div",{className:"text-center p-6 flex flex-col justify-center",children:[o(u,{title:"Admin"}),o(m,{size:"medium",border:!0,onClick:()=>{l(d())},children:"Download post..."}),o("section",{className:" grid grid-cols-2 gap-4",children:i.map(e=>s("div",{className:"flex flex-col items-start bg-neutral-600 rounded-lg",children:[s("div",{children:["Name: ",e.name]}),s("div",{children:["Email: ",e.email]}),s("div",{children:["Message: ",e.message]}),s("div",{children:["Time: ",e.time]})]},e.id))})]})})};export{j as default};
