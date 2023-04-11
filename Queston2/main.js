const parents = [
    {
      name: 'Node 1',
      descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
      childs: [
        {
          name: 'Node 1.1',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
          childs: [
            {
              name: 'Node 1.1.1',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.1.2',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.1.3',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
              childs: [
                {
                  name: 'Node 1.1.3.1',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.2',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.3',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.4',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.1.3.5',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
              ],
            },
            {
              name: 'Node 1.1.4',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
          ],
        },
        {
          name: 'Node 1.2',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
        {
          name: 'Node 1.3',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
        {
          name: 'Node 1.4',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
          childs: [
            {
              name: 'Node 1.4.1',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
            {
              name: 'Node 1.4.2',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
              childs: [
                {
                  name: 'Node 1.4.2.1',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.4.2.2',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
                {
                  name: 'Node 1.4.2.3',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                  childs: [
                    {
                      name: 'Node 1.4.2.3.1',
                      descriptions:
                        'At vero eos et accusamus et iusto odio dignissimos',
                    },
                    {
                      name: 'Node 1.4.2.3.2',
                      descriptions:
                        'At vero eos et accusamus et iusto odio dignissimos',
                    },
                  ],
                },
                {
                  name: 'Node 1.4.2.4',
                  descriptions:
                    'At vero eos et accusamus et iusto odio dignissimos',
                },
              ],
            },
            {
              name: 'Node 1.4.3',
              descriptions:
                'At vero eos et accusamus et iusto odio dignissimos',
            },
          ],
        },
        {
          name: 'Node 1.5',
          descriptions: 'At vero eos et accusamus et iusto odio dignissimos',
        },
      ],
    },
  ];
/*
**[Requirement]**

1. Output: Draw a tree diagram according to the above data:
*/
function drawTree(node, tab = '') {
// in ra node ở vị trí hiện tại
 console.log(`${tab}${node.name}: ${node.descriptions}`);

 if (node.childs) { //nếu vị trí hiện tại là 1 node cha thì đi vào bên trong nó, nếu nó ko có node con thì dừng
   tab += '  ';
   for (const child of node.childs) { // lặp trong các node con để đệ quy trở lại ban đầu
     drawTree(child, tab); //đệ quy để in ra từng node con và lặp lại check cho tới bao giờ hết node
   }
 }
}

drawTree(parents[0]);

/*
2. Send your repository link with the answers about below questions.
   1. In which point, did you feel hard?
- khó khăn nhất là làm sao để duyệt được các node con trong cây nhị phân.
   2. If you have more time to do this, what will you improve in your code?
- nếu có thêm thời gian thì sẽ dựa theo cấu trúc của cây nhị phân, nếu cấu trúc cây mà có ít các node thì có thể dùng forEach để xử lý cây nhị phân thay vì dùng hàm đệ quy, vậy thì tốc độ sẽ nhanh hơn. Nhưng đệ quy thì sẽ dành cho trường hợp ko biết rõ trong cây nhị phân đó có bao nhiêu node. 
*/

