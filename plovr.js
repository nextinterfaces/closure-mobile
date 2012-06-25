{
    // The id is used as a query parameter in the src of the <script> tag.
    "id": "next",
    "paths": ["src/touch", "src"],
    "inputs": [
        "src/touch/DragController.js",
        "src/touch/DragMouseController.js",
        "src/touch/DragEvent.js",
        "src/touch/SwipeEvent.js",
        "src/touch/DragEventsHandler.js",
        "src/touch/SwipeEventsHandler.js",
        "src/touch/VerticalScrollView.js",
        "src/touch/Point.js",
        "src/touch/Fx.js",
        "src/touch/Util.js",
        "src/touch/Id.js",

        "src/mvp/Ctx.js",
        "src/mvp/Widget.js",
        "src/mvp/View.js",
        "src/mvp/Presenter.js",
        "src/mvp/EventBus.js",

        "src/kitchensink/Event.js",
        "src/kitchensink/City.js",
        "src/kitchensink/Country.js",
        "src/kitchensink/CityPresenter.js",
        "src/kitchensink/CountryPresenter.js",
        "src/kitchensink/CityView.js",
        "src/kitchensink/CountryView.js",
        "src/kitchensink/MyEventBus.js",
        "src/kitchensink/Main.js"
    ],
    "mode": "RAW", // RAW, WHITESPACE, SIMPLE, ADVANCED
    "level": "VERBOSE",  // QUIET, DEFAULT, and VERBOSE
    "checks": {
        // acceptable values are "ERROR", "WARNING", and "OFF"
        "deprecated": "WARNING",
        "checkTypes": "WARNING",
        "nonStandardJsDocs": "WARNING",
        "checkRegExp": "WARNING",
        "checkTypes": "WARNING",
        "checkVars": "WARNING",
        "deprecated": "WARNING",
        "fileoverviewTags": "WARNING",
        "invalidCasts": "WARNING",
        "missingProperties": "WARNING",
        "nonStandardJsDocs": "WARNING",
        "undefinedVars": "WARNING"
    }
}