"use client"
const getData = async () => {
    let data = await fetch('http://localhost:3000/api/empdb');
    data = await data.json();
    if (data.success) {
        return data.result;
    }
    else {
        return false;
    }
}

const GetEmployee = async () => {
    const emp = await getData();
    return (
        <>
            <h2>Get Employee Data From Mongo DB</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Salary</td>
                        <td>Department</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((item, i) => (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.department}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default GetEmployee;