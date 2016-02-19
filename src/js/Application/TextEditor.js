(function(window, $, app) {
    function TextEditor() {
        this.detectSelectedAlignment = function() {
            var $selected = app.Page.get().find('.ui-selected');
            var alignment = $selected.attr('class').replace(/.*?(\w*)text(?:align(\w+))?.*/i, '$1$2').toLowerCase();

            switch (alignment) {
                case 'center':
                    $('#centerText').prop('checked', true);
                    break;
                case 'right':
                    $('#rightText').prop('checked', true);
                    break;
                default:
                    $('#leftText').prop('checked', true);
                    break;
            }
        };

        this.align = function(alignment) {
            var $this = app.Page.get().find('.ui-selected');

            $this.removeClass('leftText rightText textAlignCenter');

            switch (alignment) {
                case 'textAlignCenter':
                    $this.addClass('textAlignCenter');
                    break;
                case 'rightText':
                    $this.addClass('rightText');
                    break;
                case 'leftText':
                    $this.addClass('leftText');
                    break;
            }
        };

        this.changeColor = function(color) {
            var $this = app.Page.get().find('.ui-selected');
            $this.removeClass('black white');

            if (color === 'white') {
                $this.addClass('white');
            } else if (color === 'black') {
                $this.addClass('black');
            }

        };
    }

    app.modules.TextEditor = TextEditor;
})(window, jQuery, MagTool);
