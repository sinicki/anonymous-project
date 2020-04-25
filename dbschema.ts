
interface Members {
    vote_power: Number;
    email: String;
}
  
interface Countries{
    name: String;
}
  
interface Companies{ 
    email: String;
    name: String;
    description: String;
    project: Boolean;
    funded: Boolean;
    amount_donated: Number;
    amount_required: Number;
    tax_id: Number;
    country_id: String;
    funds_id: String;
    votes_up: Number;
}
  
interface Votes{
    users_id: String;
    companies_id: String;
    vote_power: Number;
}
  
interface Currency{
    name: String;
    symbol: String;
}
  
interface Funds{
    amount_donated: Number;
    description: String;
    start_date: Date;
  }
  
interface Dotations{
    users_id: String;
    funds_id: String;
    amount_donated: Number;
    currency_id: String;
}