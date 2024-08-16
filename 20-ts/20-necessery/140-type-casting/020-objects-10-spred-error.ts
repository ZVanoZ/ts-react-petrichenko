/**
 *
 */
(
    () => {
        interface ProjectInterface {
            name: string;
            projectBudget: number;
        }

        const
            departmentInfo = {
                name: "web-dev",
                departmentBudget: 50000
            },
            mainProject: ProjectInterface = {
                ...departmentInfo,
                projectBudget: 4000
            }
        ;

        console.log('mainProject', mainProject); // { name: 'web-dev', departmentBudget: 50000, projectBudget: 4000 }
    }
)();
