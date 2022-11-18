$(function(){
    $.ajax({
        type: "GET",
        url: "/jQTab/json/portfolioDB.json",
        dataType: "json",
        success: function(portfolioDB){
            var activeIndex = 0;
            var thumbImg = '';
            var pLinkInfo = '';

            // for (let x in portfolioDB[activeIndex].thImg){
            //     thumbImg += `<li><img src="${portfolioDB[activeIndex].thImg[x]}" class="img-fluid" /></li>`;
            // }
            //변수 초기선언은 증감식 못씀. 그래서 var 에 바로 안 넣고 for문 안에서 증감식 이용하는 것

            $.each( portfolioDB[activeIndex].thImg, (index, item) => {
                thumbImg += `<li><img src="${item}" class="img-fluid" /></li>`;
            })

            $.each( portfolioDB[activeIndex].pLink, (index, item) => {
                pLinkInfo += `<li>
                <a href="${item.iconLink}" class="${item.iconCs} px-3">
                <i class="${item.iconFa}" title="${item.iconText}"></i></a></li>`
            })
            
            $('.ttImg img').attr('src', portfolioDB[activeIndex].ttImg)
            $('.desc h2').html(portfolioDB[activeIndex].descH2)
            $('.desc p').html(portfolioDB[activeIndex].desc)

            $('.thImg').html(thumbImg)
            $('.p_link').html(pLinkInfo)
        },
        error : function(){

        }
    })
})