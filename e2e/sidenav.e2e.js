describe('Test SideNav', function () {

    var sideNav = element(by.id('sidenav'));
    var profile = element(by.linkText("/profile"));
    var menu = element(by.id('menu'));
    var selectedMenuItem = element(by.css('#menu > .active'));

    beforeAll(function () {
        browser.get('http://localhost:9000/dashboard');
    });

    it('Sidenav exsists', function () {
        expect(sideNav).not.toBe(undefined);
    });

    it('Menu exsists', function () {
        expect(menu).not.toBe(undefined);
    });

    it('Dashboard selected', function () {
        expect(selectedMenuItem.getAttribute('data-path')).toEqual('dashboard');
    });

    describe('Test all menu items', function () {

        var menuItems = ['profile',
                         'playlists',
                         'content',
                         'export',
                         'billing',
                         'settings',
                         'logout'];

        function click(path) {
            var menuItem = element(by.css('[data-path="' + path + '"]'));

            it('Find menu item with /' + path + ' path', function () {
               expect(menuItem).not.toBe(undefined);
            });

            it('Click /' + path + ' menu item', function () {
               menuItem.click();
            });

            if (path !== 'logout') {
                it('Check that /' + path + ' menu item is active\n', function () {
                    expect(selectedMenuItem.getAttribute('data-path')).toEqual(path);
                });
            }
        }

        for (var i = 0; i < menuItems.length; i++) {
            click(menuItems[i]);
        }
    });
});
