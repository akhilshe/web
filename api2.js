console.log(fetch('https://jsonplaceholder.typicode.com/users/3223233233232323232'))
.then(res => {
    if(res.ok)
    {
        console.log('sucess')
    }
    else{
        console.log('failure')
    }
})
.then(data=> console.log(data))
.catch(error => console.log(data))
