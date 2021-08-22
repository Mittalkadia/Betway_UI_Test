$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"\u003cerror_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "error_message"
      ],
      "line": 15,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;1"
    },
    {
      "cells": [
        "meerapatel@gmail.com",
        "",
        "Something\u0027s missing. Please check and try again."
      ],
      "line": 16,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;2"
    },
    {
      "cells": [
        "",
        "meerapatel123",
        "Something\u0027s missing. Please check and try again."
      ],
      "line": 17,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;3"
    },
    {
      "cells": [
        "1111@gmail.com",
        "abc1111",
        "Uh oh, that password doesn’t match that account. Please try again."
      ],
      "line": 18,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;4"
    },
    {
      "cells": [
        "",
        "",
        "Something\u0027s missing. Please check and try again."
      ],
      "line": 19,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;5"
    },
    {
      "cells": [
        "meerapatel@gmail.com",
        "abc1111",
        "Uh oh, that password doesn’t match that account. Please try again."
      ],
      "line": 20,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;6"
    },
    {
      "cells": [
        "1111@gmail.com",
        "meerapatel123",
        "Uh oh, that password doesn’t match that account. Please try again."
      ],
      "line": 21,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;7"
    },
    {
      "cells": [
        "$#$#$",
        "meerapatel123",
        "Uh oh, that password doesn’t match that account. Please try again."
      ],
      "line": 22,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;8"
    },
    {
      "cells": [
        "$#$#$",
        "",
        "Something\u0027s missing. Please check and try again"
      ],
      "line": 23,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;9"
    },
    {
      "cells": [
        "",
        "meera",
        "Sorry, that password is too short. It needs to be eight characters or more."
      ],
      "line": 24,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6779819200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 146026800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"meerapatel@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Something\u0027s missing. Please check and try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 110277500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meerapatel@gmail.com",
      "offset": 11
    },
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1934593500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 100722100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 72900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something\u0027s missing. Please check and try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 65211700,
  "status": "passed"
});
formatter.after({
  "duration": 870080600,
  "status": "passed"
});
formatter.before({
  "duration": 3390601000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 318700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"\" and \"meerapatel123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Something\u0027s missing. Please check and try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 140976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "meerapatel123",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1526714000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 462867900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something\u0027s missing. Please check and try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 63467900,
  "status": "passed"
});
formatter.after({
  "duration": 759935300,
  "status": "passed"
});
formatter.before({
  "duration": 3231646500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"1111@gmail.com\" and \"abc1111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Uh oh, that password doesn’t match that account. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 123491600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111@gmail.com",
      "offset": 11
    },
    {
      "val": "abc1111",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1589738300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 98019400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uh oh, that password doesn’t match that account. Please try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 65165700,
  "status": "passed"
});
formatter.after({
  "duration": 818462500,
  "status": "passed"
});
formatter.before({
  "duration": 3217781000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 60300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Something\u0027s missing. Please check and try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 89656300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1489295200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 108350800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something\u0027s missing. Please check and try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 69019700,
  "status": "passed"
});
formatter.after({
  "duration": 783523800,
  "status": "passed"
});
formatter.before({
  "duration": 3317896100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"meerapatel@gmail.com\" and \"abc1111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Uh oh, that password doesn’t match that account. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 83361800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meerapatel@gmail.com",
      "offset": 11
    },
    {
      "val": "abc1111",
      "offset": 38
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1577496900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 106064500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uh oh, that password doesn’t match that account. Please try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 67129500,
  "status": "passed"
});
formatter.after({
  "duration": 798966200,
  "status": "passed"
});
formatter.before({
  "duration": 3790052900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"1111@gmail.com\" and \"meerapatel123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Uh oh, that password doesn’t match that account. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 138201300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111@gmail.com",
      "offset": 11
    },
    {
      "val": "meerapatel123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1567211700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 539603900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 99200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uh oh, that password doesn’t match that account. Please try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 56137700,
  "status": "passed"
});
formatter.after({
  "duration": 857715500,
  "status": "passed"
});
formatter.before({
  "duration": 3351186000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"$#$#$\" and \"meerapatel123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Uh oh, that password doesn’t match that account. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 137496900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$#$#$",
      "offset": 11
    },
    {
      "val": "meerapatel123",
      "offset": 23
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1530663000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 592158600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uh oh, that password doesn’t match that account. Please try again.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 60270400,
  "status": "passed"
});
formatter.after({
  "duration": 793247300,
  "status": "passed"
});
formatter.before({
  "duration": 3435171100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"$#$#$\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Something\u0027s missing. Please check and try again\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 109496500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$#$#$",
      "offset": 11
    },
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1455647400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 98296500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Something\u0027s missing. Please check and try again",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 58732000,
  "status": "passed"
});
formatter.after({
  "duration": 798209300,
  "status": "passed"
});
formatter.before({
  "duration": 3242535900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 117700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"\" and \"meera\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"Sorry, that password is too short. It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 147597000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "meera",
      "offset": 18
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 1481801300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnSignInButton()"
});
formatter.result({
  "duration": 100169100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_able_to_login()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, that password is too short. It needs to be eight characters or more.",
      "offset": 17
    }
  ],
  "location": "MyStepDefs.user_should_get(String)"
});
formatter.result({
  "duration": 80524700,
  "status": "passed"
});
formatter.after({
  "duration": 797236400,
  "status": "passed"
});
formatter.uri("src/test/resources/search_spotrs_articles_names.feature");
formatter.feature({
  "line": 3,
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@searchSportArticles"
    }
  ]
});
formatter.before({
  "duration": 3269020000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports;use-the-search-option-to-find-all-articles-related-to-‘sports’.-output-the-first-heading-and-the-last-heading-returned-on-the-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on the BBC sport page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on the search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User type \"sports articles\" in search box",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User able to see list of sports articles",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.userOnTheBBCSportPage()"
});
formatter.result({
  "duration": 77100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClickOnTheSearchBox()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sports articles",
      "offset": 11
    }
  ],
  "location": "MyStepDefs.userTypeInSearchBox(String)"
});
formatter.result({
  "duration": 116200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userAbleToSeeListOfSportsArticles()"
});
formatter.result({
  "duration": 1445349100,
  "status": "passed"
});
formatter.after({
  "duration": 771159300,
  "status": "passed"
});
formatter.uri("src/test/resources/today_football_match_list.feature");
formatter.feature({
  "line": 3,
  "name": "As a business user, I would like to make a record of all teams which are playing today",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@Team_Name_List"
    }
  ]
});
formatter.before({
  "duration": 3295456000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Output all team names with a match today. If there are no matches today, output a message to convey this.",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today;output-all-team-names-with-a-match-today.-if-there-are-no-matches-today,-output-a-message-to-convey-this.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on BBC sport page.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User on the football scores and fixtures page.",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will get record all team name which are playing today.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.userOnBBCSportPage()"
});
formatter.result({
  "duration": 75700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userOnTheFootballScoresAndFixturesPage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userWillGetRecordAllTeamNameWhichArePlayingToday()"
});
formatter.result({
  "duration": 5821733400,
  "status": "passed"
});
formatter.after({
  "duration": 754761500,
  "status": "passed"
});
});