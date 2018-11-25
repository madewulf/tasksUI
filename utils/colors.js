export function getColorClassPerUser(members) {
    const colors = ['orange', 'red', 'pink', 'purple', 'blue', 'lightblue', 'lightgreen', 'green'];

    const colorClassPerUser = {};
    members.map((member, index) => {
        colorClassPerUser[member.key] = colors[index % colors.length];
    })
    return colorClassPerUser
}
