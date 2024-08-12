/**
 *
 */
(
    () => {
        let
            inpDataItem = {
                sex: 'M',
                fullname: 'Ivan Ivanovich',
                age: 25
            },
            inpDataList: typeof inpDataItem [] = [
                inpDataItem,
                {
                    sex: 'F',
                    fullname: 'Svetlana Ivanova',
                    age: 22
                }
            ],
            outDataItem = {
                index: 0,
                displayText: '...'
            },
            outDataList: typeof outDataItem [] = (
                (
                    list: typeof inpDataList
                ): typeof outDataItem [] => {
                    let
                        result: typeof outDataItem [] = [],
                        counter: number = outDataItem.index
                    ;
                    inpDataList.forEach(
                        (item: typeof inpDataItem): void => {
                            ++counter;
                            let newItem = Object.assign({}, outDataItem);
                            newItem.index = counter;
                            newItem.displayText = `Person: ${item.fullname}. ` +
                                (item.sex === 'M' ? '---HE---' : '---SHE---') +
                                ` is ${item.age} years old.`
                            ;
                            result.push(newItem);
                        }
                    );
                    return result;
                }
            )(inpDataList)
        ;

        display(outDataList);

        function display(
            data: typeof outDataItem []
        ) {
            data.forEach(
                (dataItem) => {
                    console.log(dataItem.index, dataItem.displayText);
                }
            );
        }
    }
)();
