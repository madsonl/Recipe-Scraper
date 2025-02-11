"use strict";

const parseDomain = require("parse-domain");

const domains = {
  "101cookbooks": require("../scrapers/101CookbooksScraper"),
  allrecipes: require("../scrapers/AllRecipesScraper"),
  ambitiouskitchen: require("../scrapers/AmbitiousKitchenScraper"),
  averiecooks: require("../scrapers/AverieCooksScraper"),
  bbc: require("../scrapers/BbcScraper"),
  bbcgoodfood: require("../scrapers/BbcGoodFoodScraper"),
  bonappetit: require("../scrapers/BonAppetitScraper"),
  budgetbytes: require("../scrapers/BudgetBytesScraper"),
  centraltexasfoodbank: require("../scrapers/CentralTexasFoodBankScraper"),
  cookieandkate: require("../scrapers/CookieAndKateScraper"),
  eatingwell: require("../scrapers/EatingWellScraper"),
  epicurious: require("../scrapers/EpicuriousScraper"),
  food: require("../scrapers/FoodScraper"),
  foodandwine: require("../scrapers/FoodAndWineScraper"),
  foodnetwork: require("../scrapers/FoodNetworkScraper"),
  gimmedelicious: require("../scrapers/GimmeDeliciousScraper"),
  gimmesomeoven: require("../scrapers/GimmeSomeOvenScraper"),
  julieblanner: require("../scrapers/JulieBlannerScraper"),
  kitchenstories: require("../scrapers/KitchenStoriesScraper"),
  melskitchencafe: require("../scrapers/MelsKitchenCafeScraper"),
  minimalistbaker: require("../scrapers/MinimalistBakerScraper"),
  myrecipes: require("../scrapers/MyRecipesScraper"),
  omnivorescookbook: require("../scrapers/OmnivoresCookbookScraper"),
  pinchofyum: require("../scrapers/PinchOfYumScraper"),
  recipetineats: require("../scrapers/RecipeTinEatsScraper"),
  seriouseats: require("../scrapers/SeriousEatsScraper"),
  simplyrecipes: require("../scrapers/SimplyRecipesScraper"),
  smittenkitchen: require("../scrapers/SmittenKitchenScraper"),
  tasteofhome: require("../scrapers/TasteOfHomeScraper"),
  thatlowcarblife: require("../scrapers/ThatLowCarbLifeScraper"),
  theblackpeppercorn: require("../scrapers/TheBlackPeppercornScraper"),
  thepioneerwoman: require("../scrapers/ThePioneerWomanScraper"),
  therecipecritic: require("../scrapers/TheRecipeCriticScraper"),
  thespruceeats: require("../scrapers/TheSpruceEatsScraper"),
  whatsgabycooking: require("../scrapers/WhatsGabyCookingScraper"),
};

/**
 * A Factory that supplies an instance of a scraper based on a given URL
 */
class ScraperFactory {
  getScraper(url) {
    let parse = parseDomain(url);
    if (parse) {
      let domain = parse.domain;
      if (domains[domain] !== undefined) {
        return new domains[domain](url);
      } else {
        throw new Error("Site not yet supported");
      }
    } else {
      throw new Error("Failed to parse domain");
    }
  }
}

module.exports = ScraperFactory;
