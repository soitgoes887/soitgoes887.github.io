var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "525366",
        "ok": "516182",
        "ko": "9184"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "62",
        "ko": "58"
    },
    "maxResponseTime": {
        "total": "1022",
        "ok": "998",
        "ko": "1022"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "81",
        "ko": "659"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "26",
        "ko": "448"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "1001"
    },
    "percentiles2": {
        "total": "81",
        "ok": "81",
        "ko": "1003"
    },
    "percentiles3": {
        "total": "99",
        "ok": "93",
        "ko": "1005"
    },
    "percentiles4": {
        "total": "1000",
        "ok": "203",
        "ko": "1007"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 516163,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 19,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 9184,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "48.372",
        "ok": "47.526",
        "ko": "0.846"
    }
},
contents: {
"req_get-domain-6b2d1": {
        type: "REQUEST",
        name: "Get Domain",
path: "Get Domain",
pathFormatted: "req_get-domain-6b2d1",
stats: {
    "name": "Get Domain",
    "numberOfRequests": {
        "total": "525366",
        "ok": "516182",
        "ko": "9184"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "62",
        "ko": "58"
    },
    "maxResponseTime": {
        "total": "1022",
        "ok": "998",
        "ko": "1022"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "81",
        "ko": "659"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "26",
        "ko": "448"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "1001"
    },
    "percentiles2": {
        "total": "81",
        "ok": "81",
        "ko": "1003"
    },
    "percentiles3": {
        "total": "99",
        "ok": "93",
        "ko": "1005"
    },
    "percentiles4": {
        "total": "1000",
        "ok": "203",
        "ko": "1007"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 516163,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 19,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 9184,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "48.372",
        "ok": "47.526",
        "ko": "0.846"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
