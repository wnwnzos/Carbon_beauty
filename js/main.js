// 카본뷰티 메인 패이지JS - main.js ////////////
// 로딩구역 //
// DOMContentLoaded 이벤트 - html랜더링 시
window.addEventListener("DOMContentLoaded",
    function () {

        console.log("로딩완료!!!!!!!!!!!!!!");

        // 부드러운 스크롤 함수 호출!
        startSS();




        // 배너 마우스 오버/아웃시 class넣기/빼기
        // 대상선정 : .banbtn
        var bbn = document.querySelector(".banbtn");
        // 마우스 오버시(.on 넣고 .off 빼기)
        bbn.onmouseover = function () {
            // this는 나 자신(.banbtn)
            this.classList.add("on");
            this.classList.remove("off");
        }; // 마우스오버 ///////////////////////////////

        // 마우스 아웃시(.off 넣고 .on 빼기)
        bbn.onmouseout = function () {
            // this는 나 자신(.banbtn)
            this.classList.add("off");
            this.classList.remove("on");
        }; // 마우스아웃 ///////////////////////////////


        //////////////////////////////////////////////////////////
        /////////////////// 패럴렉스 적용하기 ///////////////////////
        ////// vanilla JS - rellax.js 순수 JS개발코딩 //////////////
        // 깃허브 - https://github.com/dixonandmoe/rellax
        // 데모 - https://dixonandmoe.com/rellax/
        /////////////////////////////////////////////////////////

        //배너버튼
        var rellax = new Rellax('.rellax', {
            speed: -1
        }); //////////// rellax //////////////////////////


        // 상품박스 양쪽
        var rellax2 = new Rellax('.rellax2', {
            speed: 5
        }); //////////// rellax //////////////////////////


        //상품박스 중앙
        var rellax3 = new Rellax('.rellax3', {
            speed: -2
        }); //////////// rellax //////////////////////////



        /////// 상품리스트 드래그하기 ///////////////////
        // 대상선정 : .gdsec ul
        $(".gdsec>ul").draggable({
            axis: "x" // x축고정
        });

        /// 마우스버튼 클릭할때 이벤트 체크하여 리스트 슬라이드 이동하기
        // 대상선정 : .gdsec
        // 이벤트 : mouseup (마우스왼쪽버튼을 눌렀다가 뗄때 발생)
        //          mouseup (마우스가 영역을 벗어났을때 발생)
        // on(이벤트명, 함수) -> 이벤트명에 띄어쓰기로 여러이벤트를 사용할 수 있다!
    
    // 상품리스트 박스 크기(슬라이드 하나의 단위!)
    var gw =$(".gdsec").width();
    console.log("기본크기"+gw);
    
    
    
    
    
        $(".gdsec").on("mouseup mouseleave", function () {
            // 1.이벤트확인
//            console.log("나야나!");

            // 이동대상의 위치값
            // offset() 화면기준 left값
            // position()은 부모박스 기준 left값을 리턴함!

            var tgpos = $(".gdsec>ul").position().left;

            console.log("위치값:" + tgpos);
            // 2.위치값 확인하여 이동하기
            
            // 2페이지로 이동하기 /////////////////////////////
            if (
                (tgpos < -gw*0.1 && tgpos > -gw*0.5)
                ||
                (tgpos < -gw*1.5 && tgpos > -gw*1.9)
            ) {
                $(".gdsec>ul").animate({
                    left: "-100%"
                }, 800);
            }// if //////////////////
            
            //3페이지로 이동하기/////////////////////////////
            else if (
                tgpos < -gw*1.1 && tgpos > -gw*1.5
            ) {
                $(".gdsec>ul").animate({
                    left: "-200%"
                }, 800);
            }// if //////////////////
            
            // 1페이지 이동하기//////////////////////////////
            else if (
                tgpos < -gw*0.5 && tgpos > -gw*0.9
            ) {
                $(".gdsec>ul").animate({
                    left: "0%"
                }, 800);
            }// if //////////////////
            
            // 1페이지 고정하기//////////////////////////////
            else if (
                tgpos > 0
            ) {
                $(".gdsec>ul").animate({
                    left: "0%"
                }, 400);
            }// if //////////////////
            
            // 3페이지 고정하기//////////////////////////////
            else if (
                tgpos < -2*gw
            ) {
                $(".gdsec>ul").animate({
                    left: "-200%"
                }, 400);
            }// if //////////////////
            
            // 그밖에 자기자리로 돌아오기! /////////////
            else{
                
                // 단위 크기로 나눈수를 양수로 만들고 반올림하여 결과적으로 0,1,2중 하나의 수만 나오게함!
                var num = Math.round(Math.abs(tgpos/gw));
           
                // Math.abs(양수/음수) -> 절대값(양수로나옴)
                // Math.floor(소수자리수) -> 소수점 버림
                // Math.round(소수자리수) -> 소수점 반올림
                console.log("나눈수!"+num);
                
                // 자기자리로 돌아가기!
                $(".gdsec>ul").animate({
                    left: (num*-100)+"%"
                    // num*-100 의 결과는 0, -100, -200 중 하나!
                }, 400);
                
            }// else //////////////////////////////

        }); // 마우스이벤트함수 ////////////////////////////////




    
    
    
    
    
    


    }); //////////////////////////////////// 로드구역 ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
