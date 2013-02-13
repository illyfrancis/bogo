// Filters

// Criterion
// - isApplied
// - filters : Filters (either Model or Collection)

// Criteria
// - [Criterion]

// ReportSchema
// - [ReportColumns]

// ReportColumns
// - should report column know about it's filter/criterion?

// Views
/*

For Filter view 
- this is the outer view that has
    - filter/criteria drop down list (e.g. Accounts, Security, etc)
    - associated filter view (e.g account selection)
- need to have access to list of all criteria

For an account selection view it needs,
- accounts (paginated)
- criterion (-> for knowing if applied)
- There should be a button that toggles between Apply & Remove (filter) depedning on criterion model

For "Filter" badges,
- need criteria
- for each criterion if filter is applied, render a badge item with some label with close(x) button
- when "removed" on criterion (i.e. isApplied is set to false) re-render
- I think it means there are two views, maybe or maybe not

For column header views,
- need criterion (for isApplied) so that it can render the image (on/off)
- need ReportColumn (for its title)
- Q. do we need to link ReportColumn with Criterion? or is it enough that when concrete view is created that we pass in the two models.?
    - So how do I create the view?
- need to sort on click
    - Q: is sort attribute a part of Criterion?
    - onclick it needs to change the class (to change up/down up&down arrows) - or maybe not! because we'd just update the model and submit new request from API to get a new result.
    - onclick it needs to update model (but which model? - maybe we can answer this when we think about how to render the table.

For rendering table (for report result)
- need collection of report result
- need schema (from ReportSchema)
- I guess the table here is just the content (i.e. the tbody bit that is under scrollable bit) - Actually no because if the schema is changed we need to update the whole thing.
- 

For AppView

*/

// There must be a list of all known filters
// - is that the ReportSchema?

// And this about how to get it all initialized.
