const names = ['abul', 'babul', 'rahul', 'shobul', 'pabul', 'abul', 'rahul', 'pagla', 'abyl'];

function removeDuplicate(names){
    const unique = []
    for(i = 0 ;i< names.length; i++){
        if(!unique.includes(names[i]))
            unique.push(names[i]);
    }
    console.log(unique);
}
removeDuplicate(names);