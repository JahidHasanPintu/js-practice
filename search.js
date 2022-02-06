function search(phones,searchText){
    for(phone of phones){
        if(phone.name.includes(searchText)){
        console.log(phone.name);

        }
    }
}




const mobiles=[
    {name:'Redmi phone',price:5000,color: 'red'},
    {name:'Realme',price:6000,color: 'Dark'},
    {name:'One plus phone',price:8000,color: 'gray'},
    {name:'Oppo phone',price:9000,color: 'red'},
    {name:'vivo phone',price:10000,color: 'gray'},
    {name:'Huawei phone',price:15000,color: 'silver red'},
    {name:'iPhone12',price:162000,color: 'red'},
    {name:'iPhoneX',price:155200,color: 'red'},
];

search(mobiles,12);