function Form(){
    let isForEdit = false;
    return(
        <>
            <table>
                <tr>
                    <td>Enter Name : </td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>Enter Password</td>
                    <td>
                        <input type="password" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        {!isForEdit && <button>Add</button>}
                        {isForEdit && <button>Edit</button>}
                    </td>
                </tr>
            </table>
        </>
    );
}

export default Form;