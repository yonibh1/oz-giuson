const dal = require("../data-access-layer/dal");
const path = require("path");

// select * from candidates
// SELECT candidates.name, candidates.beginYear, candidates.lastUpdateDate,languages.languageName
// FROM candidates INNER JOIN languages INNER JOIN languagesforcandidates 
// ON candidates.candidatesId=languagesforcandidates.candidatesId
function getAllCandidatesAsync() {
    const candidates = dal.executeQueryAsync(`
    SELECT candidates.name,candidates.beginYear, candidates.lastUpdateDate,languages.languageName
    FROM candidates JOIN languagesforcandidates ON
    candidates.candidatesId = languagesforcandidates.candidatesId
    JOIN languages on languagesforcandidates.languageId=languages.languageId
    WHERE candidates.candidatesId = languagesforcandidates.candidatesId
    ORDER BY candidates.lastUpdateDate DESC
    `);
    return candidates;
}
// Select  candidates.name, candidates.beginYear,candidates.lastUpdateDate, languages
// From candidates JOIN (Select candidatesId, GROUP_CONCAT(languageId) as languages 
// from languagesforcandidates
// GROUP BY candidatesId) as X 
// On candidates.candidatesId = X.candidatesId
// ORDER BY candidates.lastUpdateDate DESC


function getAllLanguagesAsync() {
    const languages = dal.executeQueryAsync("select * from languages");
    return languages;
}








module.exports = {

    getAllCandidatesAsync,
    getAllLanguagesAsync

}