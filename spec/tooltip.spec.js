/*jslint maxlen:256*/
/*global ko, $, jasmine, describe, it, beforeEach, afterEach, spyOn, expect, getMajorMinorVersion, testWidgetOptions*/
(function () {
    'use strict';

    if (getMajorMinorVersion($.ui.version) === '1.8') {
        // the tooltip widget was introduced in jQuery UI 1.9
        return;
    }

    describe('The tooltip binding', function () {
        it('should handle each option of the widget', function () {
            testWidgetOptions('tooltip', {
                content: ['aaa', 'asdf'],
                disabled: [false, true],
                hide: [null, false],
                items: ['[title]', 'img[alt]'],
                position: [{ my: 'left top+15', at: 'left bottom', collision: 'flipfit' }, { my: 'left+15 center', at: 'right center', collision: 'flipfit flip'}],
                show: [null, false],
                tooltipClass: [null, 'custom-tooltip-styling'],
                track: [false, true]
            });
        });

        it('should handle each event of the widget', function () {
            var $element, vm;

            $element = $('<div data-bind="tooltip: { create: createEventHandler }"></div>').appendTo('body');
            vm = { createEventHandler: jasmine.createSpy() };

            ko.applyBindings(vm);

            expect(vm.createEventHandler).toHaveBeenCalled();

            ko.removeNode($element[0]);
        });
    });
}());