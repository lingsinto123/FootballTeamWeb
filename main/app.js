let images = [...document.querySelectorAll('#imgsrc')];
/*json format dictionary */

const players_info = {
    1:{
        "name" : "lionel messi",
        "birth" : "June 24, 1987 (age 35 years)",
        "nationality" : "Rosario, Argentina",
        "position" : "RW",
        "team" : "FC barcelona, PSG",
        "folder" : "./images/messi/"
    },
    2:{
        "name" : "frank lampard",
        "birth" : "June 20, 1978 (age 44 years)",
        "nationality" : "Romford, United Kingdom",
        "position" : "CM",
        "team" : "chelsea",
        "folder" : "./images/lampard/"
    },
    3:{
        "name" : "filippo inzaghi",
        "birth" : "August 9, 1973 (age 49 years)",
        "nationality" : "Piacenza, Italy",
        "position" : "CF",
        "team" : "ac milan",
        "folder" : "./images/inzaghi/"
    },
    4:{
        "name" : "steven gerrard",
        "birth" : "May 30, 1980 (age 42 years)",
        "nationality" : "Liverpool, United Kingdom",
        "position" : "CM",
        "team" : "liverpool",
        "folder" : "./images/gerrard/"
    },
    5:{
        "name" : "wayne rooney",
        "birth" : "October 24, 1985 (age 37 years)",
        "nationality" : "Croxteth, Liverpool, United Kingdom",
        "position" : "CF",
        "team" : "manchester united",
        "folder" : "./images/rooney/"
    },
    6:{
        "name" : "david villa",
        "birth" : "December 3, 1981 (age 41 years)",
        "nationality" : "Langreo, Spain",
        "position" : "CF",
        "team" : "fc barcelona",
        "folder" : "./images/villa/"
    },
    7:{
        "name" : "Gianluigi Buffon",
        "birth" : "January 28, 1978 (age 45 years)",
        "nationality" : "Carrara, Italy",
        "position" : "GK",
        "team" : "Juventus",
        "folder" : "./images/buffon/"
    },
    8:{
        "name" : "Johan Cruyff",
        "birth" : "April 25, 1947",
        "nationality" : "Amsterdam, Netherlands",
        "position" : "LW",
        "team" : "fc barcelona",
        "folder" : "./images/cruyff/"
    },
    9:{
        "name" : "Zinedine Zidane",
        "birth" : "June 23, 1972 (age 50 years)",
        "nationality" : "La Castellane, Marseille, France",
        "position" : "ACM",
        "team" : "Juventus, real madrid",
        "folder" : "./images/zidane/"
    },
    10:{
        "name" : "alessandro del piero",
        "birth" : "November 9, 1974 (age 48 years)",
        "nationality" : "Conegliano, Italy",
        "position" : "CF",
        "team" : "juventus",
        "folder" : "./images/delpiero/"
    },
    11:{
        "name" : "Francesco Totti",
        "birth" : "September 27, 1976 (age 46 years)",
        "nationality" : "Rome, Italy",
        "position" : "FW",
        "team" : "Roma",
        "folder" : "./images/totti/"
    },
    12:{
        "name" : "Zlatan Ibrahimović",
        "birth" : "October 3, 1981 (age 41 years)",
        "nationality" : "Malmö, Sweden",
        "position" : "FW",
        "team" : "ac milan",
        "folder" : "./images/zlatan/"
    },
    13:{
        "name" : "Didier Drogba",
        "birth" : "March 11, 1978 (age 45 years)",
        "nationality" : ", Abidjan, Côte dIvoire",
        "position" : "FW",
        "team" : "chelsea",
        "folder" : "./images/drogba/"
    },
    14:{
        "name" : "Thierry Henry",
        "birth" : "August 17, 1977 (age 45 years)",
        "nationality" : "Les Ulis, France",
        "position" : "LW",
        "team" : "arsenal",
        "folder" : "./images/henry/"
    }


}
function p1(id){
    /*get id number */
    var x=document.getElementById(id);
    /*set folder path */
    let path = players_info[x.id]["folder"]
    /*post every images from the path  */
    for (let i=0; i<images.length ;i++){
        images[i].src = path+`${i+1}.jpg`
    }
    /*post innerHTML from dictionary */
    document.getElementById("info").innerHTML = `
     Name: ${players_info[x.id]["name"]}<br>
     Birth: ${players_info[x.id]["birth"]}<br> 
     Nationality: ${players_info[x.id]["nationality"]}<br>
     Team: ${players_info[x.id]["team"]}<br>
     Position: ${players_info[x.id]["position"]}
     `;
}
