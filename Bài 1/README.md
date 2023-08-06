# Đánh giá CI ISA

Chào mừng bạn đến với thử thách viết mã. Đây là nơi mà bạn sẽ biết bạn giỏi công nghệ như thế nào.
Tất cả chúng tôi ở đây để giúp bạn. Đừng lo lắng :)

---

# Cái này là cái gì?

Đây là một thử thách mã hóa bảng trắng để chúng tôi có thể thấy cách bạn sử dụng các kỹ năng của mình để giải quyết
một vấn đề cụ thể. Bạn sẽ biết bạn đã đào tạo React tốt như thế nào và có thể biết một cuộc phỏng vấn kỹ thuật như thế nào
sẽ trông như thế nào (chúng tôi hy vọng như vậy).

### Bạn có thể:

- tìm kiếm hỗ trợ trong google về một số tài liệu thư viện.
- yêu cầu gợi ý nếu bạn gặp khó khăn ở một số điểm.

### Bạn nên:

- nói to suy nghĩ của bạn. Chúng tôi quan tâm đến cách bạn giải quyết vấn đề.
- đề xuất ý tưởng của bạn để cải thiện các ứng dụng.
- ý thức được áp lực thời gian. Vì chúng ta có một lượng thời gian hạn chế.

### Bạn không cần phải:

- viết mã hoàn hảo. Bạn có thể phạm một số sai lầm và điều đó hoàn toàn không sao cả.
- hoàn thành ứng dụng. Nhưng hãy cố gắng hết sức để đẩy giới hạn của bạn.

### Bạn phải:

- chia sẻ màn hình của bạn. Chúng tôi cần kiểm soát tiến trình của bạn.

Đó là tất cả. Chúc may mắn!

---

# Nhiệm vụ:

Trước khi bắt đầu làm việc, vui lòng dành 3 phút để xem mã nguồn và giao diện người dùng...

### 1. Hoàn thành tác vụ tạo & đánh dấu hành vi là đã hoàn thành:

Khi người dùng tạo một tác vụ bằng cách gửi biểu mẫu, Danh sách sẽ được cập nhật với mục nhập mới được tạo.
Khi người dùng nhấp vào hộp kiểm, trạng thái của mục sẽ được cập nhật thành "hoàn thành"/"chưa hoàn thành"
Và tổng số nhiệm vụ chưa hoàn thành ở trên cùng sẽ được cập nhật.

### 2. Chỉ hiển thị các nhiệm vụ chưa hoàn thành

Tạo một hộp kiểm ở trên cùng, nói rằng "Chỉ chưa hoàn thành". Khi nó được chọn, chúng tôi chỉ hiển thị tác vụ đang thực hiện.
Khi nó không được chọn, chúng tôi hiển thị cả nhiệm vụ đã hoàn thành và chưa hoàn thành.
Tìm cách sử dụng URL để truy cập nhanh các tác vụ đang diễn ra. Ví dụ: `<app-domain.com>?withDone=1` để nhận tất cả
nhiệm vụ (bao gồm các nhiệm vụ đã hoàn thành)

### 3. Lưu trữ vĩnh viễn tất cả các tác vụ và tải chúng ở vị trí đầu tiên.

Tất cả tác vụ phải được lưu trữ bên trong LocalStorage. Khi người dùng lần đầu tiên đến ứng dụng, chúng tôi tải mọi thứ
từ bộ nhớ đến ứng dụng.

### 4. Đính kèm ngày đến hạn cho một nhiệm vụ

Một nhiệm vụ có thể có ngày đến hạn để nhắc nhở sau này. Lưu trữ thông tin này và hiển thị số ngày còn lại cho đến khi
ngày đến hạn trên mỗi mục.

### 5. Chuyển đổi ngôn ngữ

Thay đổi ngôn ngữ giao diện người dùng bằng trình chuyển đổi ngôn ngữ

### 6. Sắp xếp lại danh sách

Người dùng có thể muốn tổ chức danh sách nhiệm vụ của họ. Cung cấp cho họ khả năng sắp xếp lại danh sách bất cứ thứ gì họ muốn.
