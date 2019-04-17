var args = process.argv
console.log(args[2])   // args의 정보를 담은 배열

// 해당 파일을 실행 시 args에 해당되는 값을 입력하면
// args[2]에 그 정보가 저장됨
// args[0],args[1]은 각각 node와 conditional.js의 경로가 담겨져 있음
if(args[2] == 'hyunho'){
    console.log("I'm depreesed nowadays")
}else{
    console.log("dir")
}