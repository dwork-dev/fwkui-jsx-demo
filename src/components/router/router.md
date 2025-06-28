# Router path
```text
routers = [
    {path: Định nghĩa theo công thức, component:Compoent}
]
```
Path có tham số: regex: ?, +, *, [], and () không sử dụng \ phía trước
- path có tham số: 
    + /:foo/:bar => /test/route, =>  params: { foo: 'test', bar: 'route' }
    + /users{/:id}/delete => /users/123/delete =>  params: { id: '123' }
    + /flights/:from-:to => /flights/LAX-SFO => params: { "from": "LAX", "to": "SFO" }
    + /user/:userId(\d+) => /user/42 => params: {"userId": "42"}
- Ký tự đại diện: /*splat => sẽ khớp với: /bar/baz => params: { splat: [ 'bar', 'baz' ] } 
