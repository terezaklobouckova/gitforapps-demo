function parseTimestamps(itemObj) {

    itemObj.created = itemObj.created ? iml.parseDate(Number(itemObj.created ), 'x') : null;
    itemObj.lastModified = itemObj.lastModified ? iml.parseDate(Number(itemObj.lastModified ), 'x') : null;
    itemObj.lastExecutedDate = itemObj.lastExecutedDate ? iml.parseDate(Number(itemObj.lastExecutedDate ), 'x') : null;
    itemObj.lastUpdatedDate = itemObj.lastUpdatedDate ? iml.parseDate(Number(itemObj.lastUpdatedDate ), 'x') : null;
    itemObj.createdDate = itemObj.createdDate ? iml.parseDate(Number(itemObj.createdDate ), 'x') : null;
    return itemObj;
}