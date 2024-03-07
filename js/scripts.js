
var serviceListElement = document.getElementById("service-list")
var serviceList = [
    {
        id: 1,
        name: 'Spa/Massage/Sauna',
        imageURL: "https://cdn.diemnhangroup.com/seoulacademy/2022/08/spa-la-gi-1.jpg",
    },
    {
        id: 2,
        name: 'Gym',
        imageURl: "https://gymaster.vn/wp-content/uploads/2023/11/section2-1.jpg",
    },
    {
        id: 3,
        name: 'City Tour',
        imageUrl: "https://vgotravel.com.vn/upload/images/nen%20di%20tour%20hay%20tu%20tuc%20nhung%20trai%20nghiem%20rieng%20biet%20(1).jpg",
    },
    {
        id: 4,
        name: 'Swimming',
        imageUrl: "https://vgotravel.com.vn/upload/images/nen%20di%20tour%20hay%20tu%20tuc%20nhung%20trai%20nghiem%20rieng%20biet%20(1).jpg",
    },
    {
        id: 5,
        name: 'Meals',
        imageUrl: "https://vgotravel.com.vn/upload/images/nen%20di%20tour%20hay%20tu%20tuc%20nhung%20trai%20nghiem%20rieng%20biet%20(1).jpg",
    },
    {
        id: 6,
        name: 'Yoga',
        imageUrl: "https://vgotravel.com.vn/upload/images/nen%20di%20tour%20hay%20tu%20tuc%20nhung%20trai%20nghiem%20rieng%20biet%20(1).jpg",
    }

];

var listHtml = "";


for (var i = 0; i < serviceList.length; i++) {
    listHtml += `
    <div class="list-group-item mx-2"
    style="width: 300px; height: 300px;">
    ${serviceList[i].name}
    </div>
        `;
}
serviceListElement.innerHTML = listHtml;