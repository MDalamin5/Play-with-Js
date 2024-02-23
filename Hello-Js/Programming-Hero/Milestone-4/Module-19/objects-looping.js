var age_list = {
    alamin : 24, 
    munna : 22,
    shobuj : 21,
    polok : 23, 
    tokon : 20,
    shohag : 25
}

console.log(Object.keys(age_list));

agePersonName = Object.keys(age_list)

for( i = 0; i< agePersonName.length; i++)
{
    console.log(agePersonName[i])
    // console.log(Object.keys(age_list)[i]); //advanced way
    console.log(Object.values(age_list)[i]); //advanced way
}

for( item in age_list){
    // console.log(item)
    console.log(item, '-->', age_list[item])
    // console.log(item, '-->', age_list.item) why its not works
}