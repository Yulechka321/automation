var allemployees= {  
   "QA":[  
      {  
         "name":"Yulia",
         "team":"Incredibles"
      },
      {  
         "name":"Bronya",
         "team":"Incredibles"
      },
      {  
         "name":"Aksana",
         "team":"Operations"
      }
   ],
   "BA":[  
      {  
         "name":"BA1",
         "team":"Incredibles"
      },
      {  
         "name":"BA2",
         "team":"Incredibles"
      },
      {  
         "name":"BA3",
         "team":"Incredibles"
      }
   ],
   "DEV":[  
      {  
         "name":"DEV1",
         "skill": "high",
         "team":"Operations"
      },
      {  
         "name":"DEV2",
         "skill": "moderate",
         "team":"Incredibles"
      },
      {  
         "name":"DEV3",
         "skill": "low",
         "team":"Incredibles"
      }
   ]
}

var QAs =allemployees.QA
var BAs =allemployees.BA
var DEVs=allemployees.DEV




for(var i=0; i<QAs.length; i++){
   console.log(QAs[i].name)
   console.log(QAs[i].team)
   if (QAs[i].team=="Incredibles"){
      console.log("FIRE")
   } else{
      console.log("SAVE")
   }
}
 
for(var i=0; i<BAs.length; i++){
   console.log(BAs[i].name)
   console.log(BAs[i].team)
   if (BAs[i].team=="Incredibles"){
      console.log("FIRE")
   } else{
      console.log("SAVE")
   }
}

for(var i=0; i<DEVs.length; i++){
   console.log(DEVs[i].name)
   console.log(DEVs[i].team)
   if (DEVs[i].team=="Incredibles"){
      console.log("FIRE")
   } else if(DEVs[i].skill=="low"){
   console.log("FIRE")}
      else{
      console.log("SAVE")
   }
}


for(var i=0; i<QAs[i].length; i++){
if (QAs[i].team=="Incredibles"){
  console.log(QAs[i].name+'Fire')
} else {
 console.log(QAs[i].name+'Save')
}
}


// function toFire(teams){
//   for(var i=0; i<teams[i].length; i++){
//    if (teams[i].team=="Incredibles"){
//       console.log(teams[i].name+'Fire')
//    } else {
//       console.log(teams[i].name+'Save')
// }
// }
// }
// console.log(toFire(QAs))

// }
// for(var i=0; i<ppl.length; i++){
//    if (ppl[i].team=="Incredibles"){
//       return true
//    } else {
//       return false
//    }
// }

// var ppl=QAs[i].name,QAs[i].team,BAs[i].name,BAs[i].team,DEVs[i].name,DEVs[i].team




// for(var i=0; i<teams.length; i++){
//    if (QAs[i].team=="Incredibles"){
//       return true
//    } else {
//       return false
//    }
// }

// console.log(teams)

// function isBelongToTeamToFire (team){

// for(var i=0; i<QAs.length; i++){
//    if (QAs[i].team=="Incredibles"){
//       return true
//    } else {
//       return false
//    }
// }
// }

// console.log(QAs[i].name, QAs[i].team, isBelongToTeamToFire("Incredibles"))


// for(var i=0; i<BAs.length; i++){
//    if (BAs[i].team=="Incredibles"){
//       return true
//    } else {
//       return false
//    }
// }
// for(var i=0; i<DEVs.length; i++){
//    if (DEVs[i].team=="Incredibles"){
//       return true
//    } 
//    else if (DEVs[i].skill=="low"){
//       return true}
//    else {
//       return false
//    }
// }
// }

// console.log(isBelongToTeamToFire("Incredibles"))

   

// console.log(fired("Incredibles"))


// / Print all the employees names and print next to their name:
// // "FIRE" - if team Incredibles and BA, QA or DEV with low skills
// // "SAVE" - if team is not Incredibles or DEV skill is not low cd length


// // var team=QAs||BAs||DEVs
// if (QAs[i]["team"]=="Incredibles")
// 		{console.log("FIRE")}
// 		else{
// 			console.log("SAVE")
// 		}
// if (BAs[i]["team"]=="Incredibles")
// 		{console.log("FIRE")}
// 		else{
// 			console.log("SAVE")
// 		}
// if (DEVs[i]["team"]=="Incredibles")
// 		{console.log("FIRE")}
// 		else{
// 			console.log("SAVE")
// 		}
// 	}



// // console.log(QAs[i]['name'])
// // if (isIncredibles(QAs[i]['team'])) {
// // 	console.log('fired')
// // } else {
// // 	console.log('saved')
// // }
 
 // function isIncredibles(team){
 //   return QAs[i].team
 //   if (QAs[i].team=="Incredibles"){
 //      return "FIRE"}
 //   else{
 //      return "SAVE"
 //   }
 // }
// // if (isIncredibles)	
// // console.log(isIncredibles)

// for(var i=0; i<QAs.length; i++){
//    if (QAs[i].team=="Incredibles"){
//       console.log(QAs[i].name, QAs[i].team,"FIRE")
//    } else{
//       console.log(QAs[i].name, QAs[i].team,"SAVE")
//    }
// }
  

// for(var i=0; i<BAs.length; i++){
//    if (BAs[i].team=="Incredibles"){
//       console.log(BAs[i].name,BAs[i].team,"FIRE")
//    } else{
//       console.log(BAs[i].name,BAs[i].team,"SAVE")
//    }
//    }

// for(var i=0; i<DEVs.length; i++){
//    if (DEVs[i].team=="Incredibles"){
//       console.log(DEVs[i].name,DEVs[i].team,DEVs[i].skill,"FIRE")
//    } else if(DEVs[i].skill=="low"){
//    console.log(DEVs[i].name,DEVs[i].team,DEVs[i].skill,"FIRE")}
//       else{
//       console.log(DEVs[i].name,DEVs[i].team,DEVs[i].skill,"SAVE")
//    }
// }



// console.log(QAs[i].team)

// console.log(isIncredibles("Incredibles"))


// 	// console.log(isIncredibles("ytyuiouytryiu8it"))
// 	}
//  for(var i=0; i<BAs.length; i++)
// {
// 	return(BAs[i])
// 	//console.log(BAs[i])
// 	// console.log(isIncredibles)
// }
// for(var i=0; i<DEVs.length; i++)
// {
// 	return(DEVs[i])
// 	//console.log(DEVs[i])
// 	// console.log(isIncredibles)
// }

// // console.log(QAs,BAs,DEVs)
// // // var qateam=QAs[i]['team']
// // // var bateam=BAs[i]['team']
// // // var devteam=DEVs[i]['team']
// // // console.log(qateam,bateam,devteam)
// // // // var team=qateam,bateam,devteam


// // // var isIncredibles=function(team){
// // // if (QAs[i]["team"]=="Incredibles") {
// // // return true
// // // // 	console.log("FIRE")
// // // } else {
// // // return false
// // // }

// // // if (BAs[i]["team"]=="Incredibles") {
// // // return true
// // // // 	console.log("FIRE")
// // // } else {
// // // return false
// // }

// // if (DEVs[i]["team"]=="Incredibles") {
// // return true
// // // 	console.log("FIRE")
// // } else {  
// // return false
// //  }
// // }





// //  for (var i=0; i<allemployees.length; i++)
// // {
// console.log(allemployees)
// // }


// var status=function(){
// 	if (allemployees[i]['team']=="Incredibles") {
// 		return "FIRE"
// 	} else {
// 		return "SAVE"
// 	}
// }
// for(var i=0; i<allemployees.length; i++)
// {i}
// console.log(allemployees[i]["name"])
// console.log(allemployees[i]['name'])
// if (status(allemployees[i]['team'])) {
// 	console.log('FIRE')
// } else {
// 	console.log('SAVE')
// }
// }
// Print all the employees names and print next to their name:
// "FIRE" - if team Incredibles and BA, QA or DEV with low skills
// "SAVE" - if team is not Incredibles or DEV skill is not low cd length