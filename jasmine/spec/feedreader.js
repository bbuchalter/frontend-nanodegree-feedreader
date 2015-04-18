/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe("");
            });
        });

        it('has a name', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name).not.toBe("");
          });
        });
    });

    describe('Menu element', function() {
        it('is hidden by default', function() {
          expect($('body')[0].classList).toContain('menu-hidden');
        });

        describe('when clicked', function() {
            beforeEach(function() {
                $("a.menu-icon-link").click();
            });

            it('is shown', function() {
              expect($('body')[0].classList).not.toContain('menu-hidden');
            });
        });

        describe('when clicked again', function() {
            beforeEach(function() {
              $("a.menu-icon-link").click();
            });

            it('is hidden', function() {
              expect($('body')[0].classList).toContain('menu-hidden');
            });
        });
    });

    describe("Initial entries", function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("are present", function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    describe("New Feed Selection", function() {
        var originalHeaderText;

        beforeEach(function(done) {
            originalHeaderText = $("h1.header-title").text();
            loadFeed(1, done);
        });

        it("are present", function() {
            expect($("h1.header-title").text()).not.toBe(originalHeaderText);
        });
    });
}());
