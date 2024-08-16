/**
 *
 */
(
    () => {
        interface DepartmentInterface {
            name: string;
            departmentBudget: number;
        }

        interface ProjectInterface {
            name: string;
            projectBudget: number;
        }

        const
            departmentInfo: DepartmentInterface = {
                name: "web-dev",
                departmentBudget: 50000
            },
            mainProject: ProjectInterface = transhormDepartment(departmentInfo, 4000)
        ;

        console.log('mainProject', mainProject); // { name: 'web-dev', projectBudget: 4000 }

        function transhormDepartment(
            department: DepartmentInterface,
            amount: number
        ): ProjectInterface {
            return {
                name : department.name,
                projectBudget : amount
            }
        }
    }
)();
