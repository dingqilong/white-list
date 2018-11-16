
        $(function () {
            var data = [
                [{ text: '党委会', id: "0001" }, { text: '监事会', id: '0002' }, { text: '董事会' }],
                [
                    { text: '董事会秘书', id: '0001' }, { text: '经营班子' }, { text: '3135213654', id: '00012' }, { text: '3512' }, { text: '33543' }, { text: '3546834' }, { text: '35' }, { text: '36' },
                    { text: '董事会秘书董事会秘书董事(会秘书董)事会会秘书' }, { text: '(经营班子)' }, { text: '经营班（子经营班子）' }, { text: '3512' }, { text: '33543' }, { text: '3546834' }, { text: '35' }, { text: '36' },
                    { text: '经营班子' }, { text: '3135213654' },  { text: '33543' }, { text: '3546834' }, { text: '35' }, { text: '36' }
                ],
                [
                    {
                        text: "全资", id: '3232153', children: [
                            { text: 222222, id: '0011' }, { text: 42 }, { text: 433543 },
                            { text: 222222, id: '0011' }, { text: 42 }, { text: 433543 },
                            { text: 222222, id: '0011' }, { text: 42 }, { text: 433543 },
                            { text: 222222, id: '0011' }, { text: 42 }, { text: 433543 },
                            { text: 222222, id: '0011' }, { text: 42 }, { text: 433543 }
                        ]
                    },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    {
                        text: "参股", children: [
                            { text: 4531 }, { text: 42 }, { text: 43 },
                            { text: 4531 }, { text: 42 }, { text: 43 },
                            { text: 4531 }, { text: 42 }, { text: 43 }, { text: 4531 }, { text: 42 }, { text: 43 }
                        ]
                    },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", id: '3232153', children: [{ text: 222222, id: '0011' }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    {
                        text: "参股", children: [
                            { text: 4531 }, { text: 42 }, { text: 43 },
                            { text: 4531 }, { text: 42 }, { text: 43 },
                            { text: 4531 }, { text: 42 }, { text: 43 }, { text: 4531 }, { text: 42 }, { text: 43 }
                        ]
                    },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", id: '3232153', children: [{ text: 222222, id: '0011' }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    {
                        text: "参股", children: [
                            { text: 4531 }, { text: 42 }, { text: 43 },
                            { text: 4531 }, { text: 42 }, { text: 43 },
                            { text: 4531 }, { text: 42 }, { text: 43 }, { text: 4531 }, { text: 42 }, { text: 43 }
                        ]
                    },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 433543 }] },
                    { text: "控股", children: [{ text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] },
                    { text: "全资", children: [{ text: 41 }, { text: 42 }, { text: 433543 }] },
                    { text: "控股", children: [{ text: 41 }, { text: 43542 }, { text: 43 }] },
                    { text: "参股", children: [{ text: 4531 }, { text: 42 }, { text: 43 }] }
                ]
            ]

            //遍历每层数据
            data[0].forEach(function (item, index, arr) {
                var $item = $('<div class="item Hitem"></div>');
                $item.attr({ "data-id": item.id })
                $item.text(item.text);
                $('#wrap').find('.firstLevel').append($item);
            });
            data[1].slice(0, 2).forEach(function (item, index, arr) {
                var $item = $('<div class="item Hitem"></div>');
                $item.attr({ "data-id": item.id })
                $item.text(item.text);
                $('#wrap').find('.secondLevel').append($item);
            });
            var $dashed = $('<div class="item Hitem dashed">集团领导</div>');
            $('#wrap').find('.secondLevel').append($dashed)
            data[1].slice(2, data[1].length).forEach(function (item, index, arr) {
                var $item = $('<div class="item Vitem"></div>');
                $item.attr({ "data-id": item.id })
                $item.text(item.text);
                $('#wrap').find('.thirdLevel').append($item);
            });
            //第四层
            data[2].forEach(function (item, index, arr) {
                var node1 = '<div class="fourthInner">' +
                    '<div class="item Hitem"></div>' +
                    '<div class="fifthlevel">' +
                    '<p class="divider"></p>'
                '</div>' +
                    '</div>';
                var $node1 = $(node1);
                $node1.find('.item').attr({ "data-id": item.id })
                $node1.find('.item').text(item.text);
                var children = item.children;
                if (children.length > 0) {
                    children.forEach(function (item1, index1, arr) {
                        var $item = $('<div class="item Vitem"></div>');
                        $item.attr({ "data-id": item1.id })
                        $item.text(item1.text);
                        $node1.find('.fifthlevel').append($item)
                    })
                }
                $('#wrap').find('.fourthLevel').append($node1);
            })
        })
        $(function () {
            var num = 13;
            //超过15个字符换行
            function twoline() {
                let $Vitems = $('#wrap').find('.thirdWrap').find('.Vitem');
                let $allVitems = $('#wrap').find('.Vitem');
                $allVitems.each(function (index, item, arr) {
                    var text = $(this).text().trim();
                    text = text.replace(/\(|\（/g, '︵')
                    text = text.replace(/\)|\）/g, '︶')
                    $(this).text(text)
                })
                $Vitems.each(function (index, item) {
                    var text = $(this).text().trim();
                    var index = text.indexOf('︵');
                    if (index > 0) {
                        $(item).text('').css({ width: '34px' })
                        var textArr = text.split('︵');
                        textArr[1] = '︵' + textArr[1];
                        textArr.forEach(function (item1, index1, arr1) {
                            var $span = $('<span class="split"></span>');
                            $span.text(item1);
                            $(item).append($span)
                        })
                    }
                })
                //找到第三层中间项
                var length3 = $Vitems.length
                var halfLength = 0;
                //$Vitems.eq(parseInt(length3 / 2) - 1).addClass('center')
                for(var i=0;i<parseInt(length3/2);i++){
                    var $item = $Vitems.eq(i)
                    halfLength += parseInt($item.outerWidth(true))
                }
                $('.thirdWrap .center').css({left: halfLength+5})  
            }

            twoline()

            //横向线长度
            function avoid($fourthInner, $wrap) {
                if ($fourthInner.length == 1) {
                    $wrap.find('.divider').css({ display: 'none' });
                    $wrap.addClass('onChild')
                } else if ($fourthInner.length == 0) {
                    $wrap.find('.divider').css({ display: 'none' });
                    $wrap.addClass('noneChild')
                } else {
                    var firstItem = $fourthInner.eq(0)
                    var lastItem = $fourthInner.eq($fourthInner.length - 1)
                    var allwidth = 0;
                    $fourthInner.each(function (index, item) {
                        allwidth += parseInt($(item).outerWidth(true))
                    })
                    $wrap.css({ minWidth: allwidth })
                    var outwidth = (parseInt(firstItem.outerWidth()) + parseInt(lastItem.outerWidth())) / 2
                    if ($fourthInner.length == 2) {
                        var outwidth = (parseInt(firstItem.outerWidth()) + parseInt(lastItem.outerWidth())) / 2
                    }
                    var left;
                    var firstw = parseInt(firstItem.outerWidth())
                    var wrapw = parseInt($wrap.css('width'))
                    left = Math.min(firstw, wrapw);
                    var innwidth = allwidth - outwidth;
                    var $divider = $wrap.find('.divider')
                    $divider.css({ left: left / 2 })
                    $divider.css({ width: innwidth })
                }

            }

            function initialavoid() {
                avoid($('.thirdLevel').children('.item'), $('.thirdLevel'));
                avoid($('.fourthLevel').children('.fourthInner'), $('.fourthLevel'));
                $('.fifthlevel').each(function (index, item, arr) {
                    avoid($(this).children('.item'), $(this))
                })
            }
            //等高
            function eqHeight($list) {
                var maxHeight = 0;
                $list.each(function (index, item, arr) {
                    var height = parseInt($(this).css('height'));
                    if (height > maxHeight) {
                        maxHeight = height
                    }
                })
                $list.css({ height: maxHeight })
            }
            initialavoid();
            eqHeight($('.thirdLevel').find('.item'))
            eqHeight($('.fifthlevel').find('.item'))
            window.onresize = function () {
                initialavoid()
            }
            //防止整体折行
            function avoidWrap(selecter) {
                var maxWidth = 0;
                var $divs = $(selecter).children('div')
                $divs.each(function (index, item, arr) {
                    var width = parseInt($(item).outerWidth(true));
                    if (width > maxWidth) {
                        maxWidth = width
                    }
                })
                $(selecter).css({ minWidth: maxWidth, width: maxWidth + 10 })
            }
            avoidWrap('#wrap')
        })

        //拖拽功能
        var clickFlag;
        function drag(obj) {
            var dragEle = obj;
            var _move = false;//移动标记
            var _x, _y;//鼠标离控件左上角的相对位置
            var _x_, _y_;//记录鼠标按下的的位置
            dragEle.click(function () {
                //alert("click");//点击（松开后触发）
            }).mousedown(function (e) {
                _move = true;
                _x = e.pageX - parseInt(dragEle.css("left"));
                _y = e.pageY - parseInt(dragEle.css("top"));
                _x_ = e.pageX; _y_ = e.pageY;
                // dragEle.fadeTo(20, 0.9);//点击后开始拖动并透明显示
            });
            $(document).mousemove(function (e) {
                if (_move) {
                    var x = e.pageX - _x;//移动时根据鼠标位置计算控件左上角的绝对位置
                    var y = e.pageY - _y;
                    dragEle.css({ top: y, left: x });//控件新位置
                }
            }).mouseup(function (e) {
                _move = false;
                dragEle.fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明
                var x = e.pageX - _x_; var y = e.pageY - _y_;
                var d = Math.sqrt(x * x + y * y)
                if (d > 7) {
                    clickFlag = false
                } else {
                    clickFlag = true
                }
            });
        }
        drag($('#wrap'))
        drag($('#container'))
        $('#wrap').on('click', '.item', function () {
            var id = $(this).attr('data-id')
            if (clickFlag) {
                console.log(id)
            }
        })
    