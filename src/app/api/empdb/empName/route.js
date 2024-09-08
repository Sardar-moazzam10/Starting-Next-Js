export const GET = async (req, value) => {
    //get method to show in jason format
    let empData = await fetch('http://localhost:3000/api/empdb');
    let get = empData.filter((item) => item.empName == value.params.empName);
    let result =
        get.length == 0
            ? { result: "Employee Info Not Found" }
            : { result: get[0] };
    return NextResponse.json(result, { status: 200 });
};