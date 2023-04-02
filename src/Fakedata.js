import {faker} from "@faker-js/faker"

     let data=[];
     var user={
        id:0,
        name:"",
        address:"",
        age:0,
        phoneno:0,
        occupation:"",
        country:"",
        vehicleinfo:{
            model:"",
            maker:"",
            age:0
        } 
     }
     for(let i=1;i<=1000;i++)
     {
         const user1=Object.create(user);
      user1.name= faker.name.fullName();
     user1.id=faker.datatype.uuid();
     user1.address=faker.address.streetAddress();
     user1.age=Math.floor(Math.random()*61+20);
     user1.phoneno=faker.phone.number();
     user1.occupation=faker.name.jobTitle();
     user1.country=faker.address.country();
     const vehicleinfo1=Object.create(user.vehicleinfo)
     vehicleinfo1.model=faker.vehicle.model();
     vehicleinfo1.maker=faker.vehicle.manufacturer();
     vehicleinfo1.age=Math.floor(Math.random()*30);
     user1.vehicleinfo=vehicleinfo1;
     data.push(user1);
     }

export default data;