const { useCallback } = require("react");

console.log('Hello World!');

console.log('First');
console.log('Second');
console.log('Third');

const myArray = ['First', 'Second', 'Third'];

const getItems = () => {
    setTimeout(() => {
        myArray.forEach((item) => {
            console.log(item);
        });
    }, 1000);
};

getItems();

const newArray = ['Fourth', 'Fifth', 'Sixth'];

const getNewItem = () => {
    setTimeout(() => {
        newArray.forEach((item) => {
            console.log(item);
        });
    }, 1000);
};

const addItem = (item, callback) => {
    setTimeout(() => {
        newArray.push(item);
        callback();
    }, 2000);
};

addItem('Seventh', getNewItem);

const callback = (fullname) => {
    console.log(`Hello ${fullname}!`);
};

const doSomething = (firstName, lastName, callback) => {
    let fullName = `${firstName} ${lastName}`;
    console.log('Finished doing something.');
    callback(fullName);
};

doSomething('Barry', 'Allen', callback);

const myNewArray = ['Eighth', 'Ninth', 'Tenth'];

const getMoreItems = () => {
    setTimeout(() => {
        myNewArray.forEach((item) => {
            console.log(item);
        });
    }, 1000);
};

const addNewItem = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            myNewArray.push(item);
            const error = false;
            if (!error) {
                resolve();
            }
            else 
            {
                reject('Error!');
            }
        }, 2000);
    });
};

addNewItem('Eleventh').then(getMoreItems);

const anotherArray = ['Twelfth', 'Thirteenth', 'Fourteenth'];

const getEvenMoreItems = () => {
    setTimeout(() => {
        anotherArray.forEach((item) => {
            console.log(item);
        });
    }, 1000);
};

const addMoreNewItems = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            anotherArray.push(item);
            const error = false;
            if (!error) {
                resolve();
            }
            else
            {
                reject('Error!');
            }
        }, 2000);
    });
};

addMoreNewItems('Fifteenth').then(getEvenMoreItems).finally(() => {
    console.log('Say Something!');
});

const ArrowverseArray = ['Arrow', 'The Flash'];

const getArrowverseItems = () => {
    setTimeout(() => {
        ArrowverseArray.forEach((item) => {
            console.log(item);
        });
    }, 1000);
};

const addArrowverseItem = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ArrowverseArray.push(item);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error!');
            }
        }, 2000);
    });
};

Promise.all([addArrowverseItem('Supergirl'), addArrowverseItem('Legends of Tomorrow'), addArrowverseItem('Batwoman'), addArrowverseItem('Superman and Lois'), addArrowverseItem('Vixen'), addArrowverseItem('Constantine')]).then(getArrowverseItems);

const greeting = async () => {
    return 'Hello';
};

greeting().then(console.log);

const orderedArray = ['First', 'Second', 'Third'];

const getOrderedItems = () => {
    setTimeout(() => {
        orderedArray.forEach((item) => {
            console.log(item);
        });
    }, 1000);
};

const addOrderedItem = (item) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            orderedArray.push(item);
            resolve();
        }, 2000);
    });
};

const addAndGetOrderedItem = async () => {
    await addOrderedItem('Fourth');
    await addOrderedItem('Fifth');
    await addOrderedItem('Sixth');
    getOrderedItems();
};

addAndGetOrderedItem();