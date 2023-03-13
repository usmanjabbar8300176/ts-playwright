import { Page } from "@playwright/test";
import { PlaywrightBlocker } from "@cliqz/adblocker-playwright";
import fetch from "cross-fetch";
export class Signup {
  constructor(public page: Page) {
    PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
      blocker.enableBlockingInPage(page);
    });
  }
  getVerifySignupFormSelector() {
    return ".signup-form";
  }
  getAccountInformationSelector() {
    return '[class="title text-center"]';
  }
  getAccountCreatedSelector() {
    return '[data-qa="account-created"]';
  }
  getAccountDeletedSelector() {
    return '[data-qa="account-deleted"]';
  }
  getSignupSelector() {
    return '[class="fa fa-lock"]';
  }
  getSignupNameSelector() {
    return '[data-qa="signup-name"]';
  }
  getSignupEmailSelector() {
    return '[data-qa="signup-email"]';
  }
  getSignupButtonSelector() {
    return '[data-qa="signup-button"]';
  }
  getGenderCheckboxSelector() {
    return "#id_gender1";
  }
  getPasswordSelector() {
    return '[data-qa="password"]';
  }
  getDaysSelector() {
    return "#days";
  }
  getFirstNameSelector() {
    return '[data-qa="first_name"]';
  }
  getLastNameSelector() {
    return '[data-qa="last_name"]';
  }
  getCompanySelector() {
    return '[data-qa="company"]';
  }
  getAddressSelector() {
    return '[data-qa="address"]';
  }
  getAddress2Selector() {
    return '[data-qa="address2"]';
  }
  getCountrySelector() {
    return "#country";
  }
  getStateSelector() {
    return '[data-qa="state"]';
  }
  getMobileNumberSelector() {
    return '[data-qa="mobile_number"]';
  }
  getCitySelector() {
    return '[data-qa="city"]';
  }
  getZipCodeSelector() {
    return '[data-qa="zipcode"]';
  }
  getCreateAccountSelector() {
    return '[data-qa="create-account"]';
  }
  getContinueButtonSelector() {
    return '[data-qa="continue-button"]';
  }
  getDeleteAccountSelector() {
    return '[class="fa fa-trash-o"]';
  }
  async visit() {
    await this.page.goto("https://automationexercise.com/");
  }

  async gotoSignup() {
    await this.page.locator(this.getSignupSelector()).click();
  }

  async signup(randomName, randomEmail) {
    await this.page.locator(this.getSignupNameSelector()).fill(randomName);
    await this.page.locator(this.getSignupEmailSelector()).fill(randomEmail);
    await this.page.locator(this.getSignupButtonSelector()).click();
  }

  async createAccount(data) {
    await this.page.locator(this.getGenderCheckboxSelector()).click();
    await this.page.locator(this.getPasswordSelector()).fill(data.password);
    await this.page.locator(this.getDaysSelector()).click();
    // await this.page.locator('[data-qa="days"]').locator('[value="2"]').click();
    await this.page.locator(this.getFirstNameSelector()).fill(data.firstName);
    await this.page.locator(this.getLastNameSelector()).fill(data.lastName);
    await this.page.locator(this.getCompanySelector()).fill(data.companyName);
    await this.page.locator(this.getAddressSelector()).fill(data.address1);
    await this.page.locator(this.getAddress2Selector()).fill(data.address2);
    await this.page.locator(this.getCountrySelector()).click();
    await this.page.locator(this.getStateSelector()).fill(data.state);
    await this.page.locator(this.getCitySelector()).fill(data.city);
    await this.page.locator(this.getZipCodeSelector()).fill(data.zipCode);

    await this.page
      .locator(this.getMobileNumberSelector())
      .fill(data.mobileNumber);
    await this.page.locator(this.getCreateAccountSelector()).click();
  }
  //Click on continue button
  async clickContinueButton() {
    await this.page.locator(this.getContinueButtonSelector()).click();
  }

  //Delete account
  async deleteAccount() {
    await this.page.locator(this.getDeleteAccountSelector()).click();
  }
}
