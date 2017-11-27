$('document').ready(() => {
    setInterval(function() {
        $('#timedate').text(moment().format('HH:mm D-MMM-YY'));
    }, 30 * 1000);

    $('#timedate').text(moment().format('HH:mm D-MMM-YY'));

    $('#window-size').text(
        $(window).innerWidth() + 'x' + $(window).innerHeight()
    );

    $(window).resize(function() {
        $('#window-size').text(
            $(window).innerWidth() + 'x' + $(window).innerHeight()
        );
    });

    $('.command').typewrite({
        extra_char: '▓',
        callback: function() {
            setTimeout(function() {
                const time = moment().format('MMM D H:mm');
                const template =
                    '-rw-rw-r--&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;jdsc&nbsp;&nbsp;jdsc&nbsp;&nbsp;4096&nbsp;&nbsp;' +
                    time +
                    '&nbsp;&nbsp;&nbsp;&nbsp;';
                $('.list').html(
                    "<ul><li><span class='temp'></span><a target='_blank' id='b' href='#''></a></li><li><span class='temp'></span><a target='_blank' id='g' href='#'></a></li><li><span class='temp'></span><a target='_blank' id='c' href='#'></a></li><li><span class='temp'></span><a target='_blank' id='fcc' href='#''></a></li><li><span class='temp'></span><a target='_blank' id='photography' href='#''></a></li></ul>"
                );
                $('.temp').html(template);
                $('#b').text('blog');
                $('#b').attr('href', 'https://blog.johncrisostomo.com');
                $('#g').text('github');
                $('#g').attr('href', 'https://github.com/johncrisostomo');
                $('#c').text('codepen');
                $('#c').attr('href', 'https://codepen.io/johncrisostomo/');
                $('#fcc').text('freeCodeCamp');
                $('#fcc').attr(
                    'href',
                    'https://www.freecodecamp.com/johncrisostomo'
                );
                $('#photography').text('Photography');
                $('#instagram').attr('href', 'https://www.johncrisostomo.com');
                $('.command').html('ls -l');
                $('.cursor2').show();
            }, 300);
        },
        delay: 200
    });
});
