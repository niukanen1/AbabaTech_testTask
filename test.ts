import { Reaction } from "mobx";


function getPages(cur: number, total: number) { 
    let next: number[] = [] 
    let prev: number[] = [] 

    for (let i = 1; i < 4; i++ ) { 
        let nextPageToAdd = cur + i;
        if (nextPageToAdd < total) { 
            next.push(nextPageToAdd);
        }
    }
    for (let i = 1; i < 4; i++ ) { 
        let prevPageToAdd = cur + i;
        if (prevPageToAdd < total) { 
            prev.push(prevPageToAdd);
        }
    }
    console.log(next)
    console.log(prev)
}

getPages(1, 10); 

