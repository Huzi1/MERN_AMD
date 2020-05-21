function ArrayToSet(object) {
    // console.log(object)
    const mySet = new Set()

    object.forEach(function (item, index) {
        mySet.add(item.category)
    });
    console.log(mySet)
    const myArr = [...mySet]
    // console.log(myArr)
    return myArr
}

function BillBykey(keys, bill) {

    const myDict = {}
    var tempArr = []
    keys.forEach(function (item, index) {


        bill.forEach(function (item2, index2) {

            if (item2.category === item) {
                tempArr.push(
                    item2.amount)
            }
        })

        myDict[`${item}`] = tempArr

        tempArr = []
    })

    // console.log("Creating Obj" + JSON.stringify(myDict))
    return JSON.stringify(myDict)
}

function toUpperCase(arr) {
    const myArr = []

    arr.forEach(function (item) {

        myArr.push(item.charAt(0).toUpperCase());

    })

    // console.log(myArr)
    return myArr
}

function billSum(arr, object) {
    const obj = JSON.parse(object)
    // console.log("In billsum" + obj);
    const myArr = []

    function getSum(total, num) {
        return total + Math.round(num);
    }

    arr.forEach(function (item) {
        const sum = (obj[`${item}`])
        // console.log(sum.reduce(getSum,0))
        myArr.push(sum.reduce(getSum, 0))
    })
    // console.log(myArr)

    return myArr
}

function RandomColorCode(num) {
    // console.log(num)
    const myArr = []

    function dynamicColors () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        let x = "rgb(" + r + ',' + g + ',' + b + ")"

        // console.log(x)
        return x;
    }

    for(let i=0;i<=num;i++){
        let color = dynamicColors()
        // console.log(color)
        myArr.push(color)
    }


    // console.log("hello"+myArr)
    return myArr

}

// export default ArrayToSet;
module.exports = {
    ArrayToSet,
    BillBykey,
    toUpperCase,
    billSum,
    RandomColorCode
}