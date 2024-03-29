Array.prototype.AsV2 = function () {
    return new ArrayV2(this);
};
Array.prototype.SpecialGetterFilter = function () {
    return JSON.parse(JSON.stringify(this));
}

function getManyNestedObject(obj, keys) {
    let result = {};
    for (const key of keys) result[key] = getNestedObject(obj, key);
    return result;
}
function getNestedObject(obj, keyStr) {
    const objectKeys = keyStr.split('.');
    for (const key of objectKeys) {
        if (key in obj) {
            obj = obj[key];
        } else {
            return;
        }
    }
    return obj;
}

function setNestedObject(obj, keys, value) {
    let objectKeys = keys.split('.');
    let objectStructure = [];
    for (const key of objectKeys) {
        if (obj[key] == null || obj[key] == undefined) obj[key] = {};
        if (key in obj) {
            objectStructure.push(obj);
            obj = obj[key];
        }
    }

    const arrLength = objectStructure.length;
    objectStructure[arrLength] = value;

    objectStructure = objectStructure.reverse();
    objectKeys = objectKeys.reverse();

    for (let i in objectStructure) {
        if ((parseInt(i) + 1) > arrLength)
            return objectStructure[i];
        else
            objectStructure[parseInt(i) + 1][objectKeys[parseInt(i)]] = objectStructure[parseInt(i)];
    }

    return obj;
}


class ArrayV2 {
    /* Class Default */
    //Debug = false;
    //Data = [];

    constructor(arr) {
        this.Data = arr;
    }

    /* Default Functions */

    Get() {
        return this.Data;
    }
    Set(arr) {
        this.Data = arr;
        return this.Get();
    }

    /* Complex Functions */
    /* Get Functions */

    Where(query) {
        let result = [];
        for (let i in this.Get()) {
            try {
                if (query(this.Get()[i]))
                    result.push(this.Get()[i]);
            }
            catch (ex) { if (Debug) console.info(ex); }
        }
        return result.SpecialGetterFilter();
    }
    OrderBy(query) {
        return this.Get().sort(query).SpecialGetterFilter();
    }
    OrderByDesc(query) {
        return this.OrderBy(query).reverse();
    }
    Select(key) {
        const resultData = [];
        for (const item of this.Get()) resultData.push(getNestedObject(item, key));
        return { path: key, data: resultData.SpecialGetterFilter() };
    }
    SelectMany(keys) {
        const resultData = [];
        for (const item of this.Get()) resultData.push(getManyNestedObject(item, keys));
        return resultData.SpecialGetterFilter();
    }
    GroupBy(key) {
        let result = {};
        for (item of this.Get()) {
            if (result[item[key]] == undefined)
                result[item[key]] = [item];
            else
                result[item[key]].push(item);
        }
        return result.SpecialGetterFilter();
    }

    /* Set Functions */

    WhereSet(query) {
        return this.Set(this.Where(query));
    }
    OrderBySet(query) {
        return this.Set(this.OrderBy(query));
    }
    OrderByDescSet(query) {
        return this.Set(this.OrderByDesc(query));
    }
    SelectSet(key) {
        return Set(this.Select(key));
    }
    SelectManySet(keys) {
        return Set(this.SelectMany(keys));
    }
    GroupBySet(key) {
        return Set(this.GroupBy(key));
    }
}


module.exports = ArrayV2;
