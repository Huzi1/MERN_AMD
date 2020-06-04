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

function billKeyByYear(key, prevYear, currYear, bills) {
    let data1 =0, data2 = 0;
    console.log(key)
    console.log("bills Util", bills)
    console.log("prevYear Util",prevYear)
    console.log("currYear Util",currYear)
    bills.forEach(function (item, index) {
        if(item.id != null) {
            if (item.category === key.toLowerCase() && item.id.includes(currYear)) {
                data1 += item.amount
            }

            if (item.category === key.toLowerCase() && item.id.includes(prevYear)) {
                data2 += item.amount
            }

        }
    })
        console.log("data1",data1)
        console.log("data2",data2)
    return [data1,data2];
}
function sortBillByYear (keys, prevYear, currYear, bills){
    let dataSet1 =[]
    let dataSet2 =[]
    console.log("prevYear",prevYear)
    console.log("prevYear",currYear)
    keys.forEach(function (item){
      let tempArr = billKeyByYear(item,prevYear,currYear,bills)
        dataSet1.push(tempArr[0])
        dataSet2.push(tempArr[1])
    })

    return {
        first: dataSet1,
        second:dataSet2
    }
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
function yearlyTotalBillSum (bill){
    let calender = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];
    let sum = [];
    calender.forEach(function(item){
        sum.push(billSumMonthly(item.toLowerCase(), bill))
    })
    return sum
}

function billSumMonthly (month, arr){
    let sum = 0;

    arr.forEach(function(item){
        if(item.id != null) {
            if (item.id.includes(month)) {
                sum += item.amount
            }
        }
    })
    return sum
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

    function dynamicColors() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        let x = "rgb(" + r + ',' + g + ',' + b + ")"

        // console.log(x)
        return x;
    }

    for (let i = 0; i <= num; i++) {
        let color = dynamicColors()
        // console.log(color)
        myArr.push(color)
    }


    // console.log("hello"+myArr)
    return myArr

}

function sortSelectedBill(title, arrObj) {
    let mySelectedArracy = [];
    console.log(arrObj)
    arrObj.forEach(function (item) {
        if (item.category === title && item.id != null) {
            mySelectedArracy.push(item)
        }
    })
    console.log("My selected Array", mySelectedArracy)

    return mySelectedArracy;
};

// export default ArrayToSet;
module.exports = {
    ArrayToSet,
    BillBykey,
    toUpperCase,
    billSum,
    RandomColorCode,
    sortSelectedBill,
    sortBillByYear,
    yearlyTotalBillSum
}