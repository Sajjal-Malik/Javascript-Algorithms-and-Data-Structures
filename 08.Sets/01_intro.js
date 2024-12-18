const set = new Set([1,2,3]);
set.add(5);
set.add(7);
set.add(9);

for(const item of set){
    console.log(item);
}

console.log(set.has(5));

set.delete(7)
for(const item of set){
    console.log(item);
}