import React from 'react'

class Checkbox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, title: "This is first checkbox", checked: false, expand: false },
                { id: 2, title: "This is first checkbox", checked: false, expand: false },
                { id: 3, title: "This is first checkbox", checked: false, expand: false },
            ],
            isDisable: true
        }

    }

    handleCheck = (id) => {
        this.setState(() => ({
            data: this.state.data.map((item) => {
                if (item.id == id) {
                    return { ...item, checked: !item.checked }
                }
                else {
                    return { ...item }
                }
            })
        }))

    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.data)

        if (prevState.data !== this.state.data) {
            let bool = this.state.data.every((item) => item.checked == true)
            if (bool) {
                this.setState(() => ({ isDisable: false }))
            }
            else {
                this.setState(() => ({ isDisable: true }))
            }
        }
    }

    expand = (id) => {
        this.setState(() => ({
            data: this.state.data.map((item) => {
                if (item.id == id) {
                    return { ...item, expand: !item.expand }
                }
                else {
                    return { ...item, expand: false }
                }
            })
        }))
    }





    render() {
        return (
            <>
                <div style={{ margin: "auto", height: "300px", width: "400px", backgroundColor: "blueviolet", marginTop: "50px", textAlign: "center" }}>
                    {
                        this.state.data.map((item) => {
                            return (
                                <>
                                    <input type="checkbox" name={item.id} onClick={() => this.handleCheck(item.id)} />
                                    <label for={item.id}>{item.title}</label>
                                    <button onClick={() => this.expand(item.id)}>Expand</button>
                                    <br />
                                    {item.expand && <h1>Hi this is expandle</h1>}
                                </>
                            )
                        })
                    }
                    <button disabled={this.state.isDisable}>Submit</button>
                </div>

            </>
        )
    }
}

export default Checkbox 