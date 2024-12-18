function towerOfHanoi(n, fromRod, toRod, UsingRod){
    if (n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, toRod, UsingRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, UsingRod, fromRod, toRod);

}

towerOfHanoi(3, 'A', 'C', 'B')