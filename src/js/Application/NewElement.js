/* globals magazineBuilder */

(function(window, $, app) {
    function NewElement() {
        
        // Add the new element to the DOM
        this.addToDom = function($elements) {
            var $content = app.Page.getContent();

            // If a slug exists, add the new element after the slug, else add it to the top of the page
            var $slug = app.Slug.findSlug();

            if ($slug.length) {
                $slug.after($elements);
            } else {
                $elements.prependTo($content);
            }
            
            // Deselect all other elements
            app.ContentEditor.deselectAll();
            
            // Apply edit interactions to the new element.
            app.ContentEditor.applyInteractions($elements);
            
            // Select the new Element
            app.ContentEditor.select($elements);
        };
        
        // Create New Text Element
        this.newText = function() {
            var $newDiv = $('<div/>', {
                class: 'span-12 textAlignCenter push-down-18 push-right-18 editable resizable draggable ui-selectee'
            });
            $newDiv.text('NEW EMPTY TEXT ELEMENT');
            addToDom($newDiv);
        };
        
        // Create New Image Element
        this.newImage = function() {
            var $newDiv = $('<div/>', {
                class: 'span-12 textAlignCenter push-down-18 push-right-18 resizable draggable ui-selectee'
            });

            $newDiv.append('<img src="http://lorempixel.com/image_output/cats-q-c-200-200-9.jpg" alt="net-a-porter" data-img-src@2x="http://lorempixel.com/image_output/cats-q-c-200-200-9.jpg" />');
            console.log("img = " + $newDiv);
            addToDom($newDiv);
        };
        
        // Create New CTA Element
        this.newCTA = function() {
            var $newDiv = $('<div/>', {
                class: 'btnShopThe span-12 textAlignCenter push-down-18 push-right-18 editable resizable draggable ui-selectee'
            });

            // --> create new element and then .appenTo($newDiv)
            $newDiv.append('<a data-magtool="ntk" href="${CtaLinkXML[\'ntk\'].@url}">SHOP THE SELECTION</a>');
            addToDom($newDiv);
        };
    }
    
    app.modules.NewElement = NewElement;
})(window, jQuery, MagTool);
