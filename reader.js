let button = document.getElementById("get-text-btn");
            let textArea = document.getElementById("my-text-area");
            let loader = document.getElementById("loader");
            button.addEventListener("click", function () {
                getData();
            });
            async function getData() {
                try {
                    loader.style.display = "inline-block";
                    let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt');
                    if (response.status !== 200) {
                        throw new Error("Error while reading file.");
                    }
                    let text = await response.text();
                    let studentList = text.split("\n");
                    var newStudents = [];
                    while (studentList.length > 0) {
                        class Student {

                        constructor(name, address, phone, course){
                            this.name = name;
                            this.address = address;
                            this.phone = phone;
                            this.course = course;
                        }
                        getInfo() {
                            return "Name: " + this.name + "\n" +
                            "Address: " + this.address + "\n" +
                            "Phone: " + this.phone + "\n" +
                            "Course: " + this.course "\n"
                        }
                        }
                        var newStudent = new Student(studentList[0], studentList[1], studentList[2], studentList[3]);
                        newStudents.push(Student.getInfo() + '\n');
                        studentList.splice(0, 4);
                        textArea.innerHTML = document.write(newStudent);
                    }
                } catch (err) {
                    textArea.innerHTML = 'Fetch problem: ' + err.message;
                } finally {
                    loader.style.display = "none";
                }
            }

