function ArrayToSet(object) {

    const mySet = new Set()

    object.forEach(function (item, index) {
        mySet.add(item.category)
    });

    const myArr = [...mySet]
    //
    return myArr
}

function billKeyByYear(key, prevYear, currYear, bills) {
    let data1 =0, data2 = 0;




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


    return [data1,data2];
}
function sortBillByYear (keys, prevYear, currYear, bills){
    let dataSet1 =[]
    let dataSet2 =[]


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

    //
    return JSON.stringify(myDict)
}

function toUpperCase(arr) {
    const myArr = []

    arr.forEach(function (item) {

        myArr.push(item.charAt(0).toUpperCase());

    })

    //
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
    //
    const myArr = []

    function getSum(total, num) {
        return total + Math.round(num);
    }

    arr.forEach(function (item) {
        const sum = (obj[`${item}`])
        //
        myArr.push(sum.reduce(getSum, 0))
    })
    //

    return myArr
}

function RandomColorCode(num) {
    //
    const myArr = []

    function dynamicColors() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        let x = "rgb(" + r + ',' + g + ',' + b + ")"

        //
        return x;
    }

    for (let i = 0; i <= num; i++) {
        let color = dynamicColors()
        //
        myArr.push(color)
    }


    //
    return myArr

}

function sortSelectedBill(title, arrObj) {
    let mySelectedArracy = [];

    arrObj.forEach(function (item) {
        if (item.category === title && item.id != null) {
            mySelectedArracy.push(item)
        }
    })


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