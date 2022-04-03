/*
    Bind

    1. Phương thức bind sẽ trả về một hàm mới
    2. Có thể nhận các đối số như hàm ban đầu
    3. Không thực hiện gọi hàm
    4. Nếu bind kèm `arg1, arg2 ...` thì các đối số này
    sẽ được ưu tiên hơn
*/ 


this.firstName = "Minh"
this.lastName = "Thu"

const teacher = {
    firstName : "Van",
    lastName: "Luong",
    getFullName(age) {
        return `${this.firstName} ${this.lastName} - ${age}`
    }
}

const student = {
    firstName: "Van",
    lastName: "Nam"
}

// console.log(teacher.getFullName());
const getTeacherName = teacher.getFullName.bind(student)

// console.log(getTeacherName(20));

// ----------------------------------------------------------------


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const appCar = (() => {
    const cars = ['BMW']
    const root = $('#ulBind')
    const input = $('#inputBind')
    const submit = $('#addBind')


    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index=${index}>Delete</span>
                </li>
            `).join('')

            root.innerHTML = html
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn) {
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
                console.log(index);
            }
        },
        init() {
            // Handle dom events
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null
                input.focus()
            }

            root.onclick = this.handleDelete.bind(this)

            this.render()
        }
    }
})();

appCar.init()