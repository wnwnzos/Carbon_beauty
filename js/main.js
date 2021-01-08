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
        $(".gdsec").on("mouseup mouseleave", function () {
            // 1.이벤트확인
            console.log("나야나!");

            // 이동대상의 위치값
            // offset() 화면기준 left값
            // position()은 부모박스 기준 left값을 리턴함!

            var tgpos = $(".gdsec>ul").position().left;

            console.log("위치값:" + tgpos);
            // 2.위치값 확인하여 이동하기
            if (tgpos < 0) {
                $(".gdsec>ul").animate({
                    left: "-100%"
                }, 800);
            }

        }); // 마우스이벤트함수 ////////////////////////////////






    }); //////////////////////////////////// 로드구역 ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
