$(document).ready(function(){
    $('.readmore-btn').on('click', function(){
        const $project = $(this).closest('.project');

        const title = $project.data('title');
        const tech = $project.data('tech');
        const desc = $project.data('desc');
        const github = $project.data('github');
        
        $('.popup .title').text(title)
        $('.popup .tech').text(tech)
        $('.popup .desc').text(desc)
        $('.popup .github').attr('href', github)

        $('#project-popup').removeClass('hidden');
    })

    $('.popup .close').on('click', function(){
        $('#project-popup').addClass('hidden');
    })
    
    $('#project-popup').on('click', function(e){
        if($(e.target).is('#project-popup')){
            $(this).addClass('hidden');
        }
    });
});