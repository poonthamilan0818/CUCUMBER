$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/addtariffplan/AddTeriffPlan.feature");
formatter.feature({
  "name": "The user to verify the Add Tariff Plan functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify the Add Tariff Plan is added",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is in Telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_is_in_Telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user to Click the Add Tariff Plan",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_to_Click_the_Add_Tariff_Plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should navigate to Add Tariff Plan page",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_should_navigate_to_Add_Tariff_Plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user to fill the Tariff plan details",
  "rows": [
    {
      "cells": [
        "MonRent",
        "locMin",
        "IntMin",
        "smsPack",
        "Locpermin",
        "IntPerMin",
        "smschar"
      ]
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_to_fill_the_Tariff_plan_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The click the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the Congratulation you add Tariff Plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_should_see_the_Congratulation_you_add_Tariff_Plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the home button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_click_the_home_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user return to Telecom home page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan_Step.the_user_return_to_Telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
});